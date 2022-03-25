import {useState, useEffect} from 'react';
import {
    collection,
    QueryDocumentSnapshot,
    DocumentData,
    getDocs,
    query,
    where, 
    limit
} from "@firebase/firestore";
import {firestore} from '../firebase/initialize';
import {
    Container,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Grid,
    GridItem,
    Flex
} from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel
} from '@chakra-ui/accordion'
 
const StudentPage = () => {
    const studentCollection = collection(firestore, 'student-data');
    const [students, setStudents] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getStudents = async () => {
        // John Smith:
        const studentQuery = query(studentCollection, where('studentId', '==', 2038452), limit(1));
        // Ben Ptak: 
        // const studentQuery = query(studentCollection, where('studentId', '==', 1234567), limit(1));
        // Michael Monares: 
        // const studentQuery = query(studentCollection, where('studentId', '==', 7654321), limit(1));
        // Liam Elder: 
        // const studentQuery = query(studentCollection, where('studentId', '==', 6666666), limit(1));

        const querySnapshot = await getDocs(studentQuery);
        const result: QueryDocumentSnapshot<DocumentData>[] = [];
        querySnapshot.forEach((snapshot) => {
            result.push(snapshot);
        });
        setStudents(result);
    };

    useEffect(() => {
        getStudents();

        setTimeout(() => {
            setLoading(false);
        }, 2000)
    });

    return (
        <Container maxW="container.xl" py={20}>
            <Heading color = "gray" >{loading ? null : students[0].get('firstName') + ' ' + students[0].get('lastName')}</Heading>
            <Accordion allowMultiple>
                <Table variant='simple'>
                    <Flex
                            w={['320px','425px','768px', '1024px']}
                            maxW='1024px'
                            justify='center'
                            direction={['column']}
                    >
                        <Thead>
                                <AccordionItem>
                                    <Tr>
                                        <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                                            <GridItem w={[100,200,300]}>
                                                <Th>Status</Th>
                                            </GridItem>
                                            <GridItem w={[100,200,300]}>
                                                <Th>Departments</Th>
                                            </GridItem>
                                            <GridItem w={[100,200,300]}>
                                                <Th>Location</Th>
                                            </GridItem>
                                            <GridItem w={[100,200,300]}>
                                                <Th>Hours Open</Th>
                                            </GridItem>
                                        </Grid>
                                    </Tr>
                                </AccordionItem>
                        </Thead>
                        <Tbody>
                            <AccordionItem>
                                <AccordionButton>
                                    <Tr backgroundColor={loading ? 'gray.100' : students[0].get('busOff') ? 'green.100' : 'red.100'}>
                                        <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                                            <GridItem w={[100,200,300]} >
                                                <Td h={['110px', '80px', '50px', '50px']}>{loading ? 'Loading' : students[0].get('busOff') ? 'Complete' : 'Incomplete'}</Td>
                                            </GridItem>
                                            <GridItem w={[100,200,300]} >
                                                <Td h={['110px', '80px', '50px', '50px']}>Business Office</Td>
                                            </GridItem>
                                            <GridItem w={[100,200,300]} >
                                                <Td h={['110px', '80px', '50px', '50px']}>St Benedicts Rm 104</Td>
                                            </GridItem>
                                            <GridItem w={[100,200,300]} >
                                                <Td>11:30AM-3:30PM</Td>
                                            </GridItem>
                                        </Grid>
                                    </Tr>
                                    <AccordionIcon/>
                                </AccordionButton>
                                <AccordionPanel pb='4'>
                                        Welcome to the Benedictine College Student Billing Office!  We are responsible 
                                        for student billing, oversight of payment plans, student loan refunds or overpayments, 
                                        and collections of Perkins loan accounts once a student graduates or leaves school. 
                                        Student Billing works closely with students and families to manage the students&apos; financial
                                        obligations as well as the college&apos;s fiscal stewardship in a responsible and respectful manner.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Tr backgroundColor={loading ? 'gray.100' : students[0].get('finAid') ? 'green.100' : 'red.100'}>
                                        <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                                            <GridItem w={[100,200,300]} >
                                                <Td h={['110px', '80px', '50px', '50px']}>{loading ? 'Loading' : students[0].get('finAid') ? 'Complete' : 'Incomplete'}</Td>
                                            </GridItem>
                                            <GridItem w={[100,200,300]} >
                                                <Td h={['110px', '80px', '50px', '50px']}>Financial Aid</Td>
                                            </GridItem>
                                            <GridItem w={[100,200,300]} >
                                                <Td h={['110px', '80px', '50px', '50px']}>St Benedicts Rm 402</Td>
                                            </GridItem>
                                            <GridItem w={[100,200,300]} >
                                                <Td>11:30AM-3:30PM</Td>
                                            </GridItem>
                                        </Grid>
                                    </Tr>
                                    <AccordionIcon/>
                                </AccordionButton>
                                    <AccordionPanel pb='4'>
                                    <b>100% of Benedictine College students receive some form of financial aid. </b>
                                    We work with students and families to help them understand their financing options 
                                    and what is offered through financial aid. This shared investment allows us to offer
                                    a transformative experience to our students.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Tr backgroundColor={loading ? 'gray.100' : students[0].get('nurse') ? 'green.100' : 'red.100'}>
                                        <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                                            <GridItem w={[100,200,300]} >
                                                    <Td h={['110px', '80px', '50px', '50px']}>{loading ? 'Loading' : students[0].get('nurse') ? 'Complete' : 'Incomplete'}</Td>
                                            </GridItem>
                                            <GridItem w={[100,200,300]} >
                                                <Td h={['110px', '80px', '50px', '50px']}>Nurse&apos;s Office</Td>
                                            </GridItem>
                                            <GridItem w={[100,200,300]} >
                                                <Td h={['110px', '80px', '50px', '50px']}>Health Center Rm 107</Td>
                                            </GridItem>
                                            <GridItem w={[100,200,300]} >
                                                <Td>9:30AM-2PM</Td>
                                            </GridItem>
                                        </Grid>
                                    </Tr>
                                    <AccordionIcon/>
                                </AccordionButton>
                                <AccordionPanel pb='4'>
                                The mission of Student Health Services is to support our Benedictine students 
                                in fulfilling their educational and personal goals by promoting health through a 
                                variety of services.
                                <br/>
                                We strive to promote wellness through education, counseling and preventive services. 
                                Good health is best achieved through a healthy lifestyle of adequate rest, daily exercise, 
                                a balanced diet, and healthy choices.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Tr backgroundColor={loading ? 'gray.100' : students[0].get('parents') ? 'green.100' : 'red.100'}>
                                        <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                                            <GridItem w={[100,200,300]} >
                                                <Td h={['110px', '80px', '50px', '50px']}>{loading ? 'Loading' : students[0].get('parents') ? 'Complete' : 'Incomplete'}</Td>
                                            </GridItem>
                                            <GridItem w={[100,200,300]} >
                                                <Td h={['110px', '80px', '50px', '50px']}>Parents</Td>
                                            </GridItem>
                                            <GridItem w={[100,200,300]} >
                                                <Td h={['110px', '80px', '50px', '50px']}>Ferrel Academic Center</Td>
                                            </GridItem>
                                            <GridItem w={[100,200,300]} >
                                                <Td>9AM-12:30PM</Td>
                                            </GridItem>
                                        </Grid>
                                    </Tr>
                                    <AccordionIcon/>
                                </AccordionButton>
                                <AccordionPanel pb='4'>
                                The parents should go to this location for questions
                                </AccordionPanel>
                            </AccordionItem>
                        </Tbody>
                    </Flex>
                </Table>
            </Accordion>
        </Container>
    )
};

export default StudentPage;

