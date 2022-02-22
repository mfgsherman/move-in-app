import {useState, useEffect} from "react";
import {
    collection,
    QueryDocumentSnapshot,
    DocumentData,
    getDocs
} from "@firebase/firestore";
import { 
    Container,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    Tab,
    Tabs, 
    TabList,
    TabPanel,
    TabPanels
} from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel
} from '@chakra-ui/accordion'
import firestore from "../firebase/initialize";

const AdminPage = () => {
    const studentCollection = collection(firestore, 'student-data');
    const [students, setStudents] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getStudents = async () => {
        const querySnapshot = await getDocs(studentCollection);
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

    const busOffStudents = students.filter((student) => !student.get('busOff'));
    const finAidStudents = students.filter((student) => !student.get('finAid'));
    const nurseStudents = students.filter((student) => !student.get('nurse'));
    const parentsStudents = students.filter((student) => !student.get('parents'));

    return (
        <Tabs>
            <TabList>
                <Tab>By Department</Tab>
                <Tab>Students</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Container 
                        maxW="container.xl" 
                        py={20} 
                        px={0}
                    >
                        <Accordion 
                            allowToggle
                            allowMultiple
                        >
                            <AccordionItem>
                                <AccordionButton>
                                    <Box 
                                        flex ='1' 
                                        textAlign='left'
                                    >
                                    <Heading 
                                        color='red' 
                                        pt={5}
                                    >
                                        Business Office
                                    </Heading>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel p={0}>
                                    <Box overflowX="auto">
                                        <Table 
                                            variant='simple' 
                                            backgroundColor="gray.200"
                                        >
                                            <Thead>
                                                <Tr>
                                                    <Th>Student ID</Th>
                                                    <Th>Admit Status</Th>
                                                    <Th>Last Name</Th>
                                                    <Th>First Name</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {
                                                    loading || busOffStudents.length === 0 ? (null) : (
                                                        busOffStudents.map((student) => (
                                                            <Tr 
                                                                key={student.get('studentId')}
                                                            >
                                                                <Td>{student.get('studentId')}</Td>
                                                                <Td>{student.get('admit')}</Td>
                                                                <Td>{student.get('lastName')}</Td>
                                                                <Td>{student.get('firstName')}</Td>
                                                            </Tr>
                                                        ))
                                                    )
                                                }
                                            </Tbody>
                                        </Table>
                                    </Box>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box 
                                        flex ='1' 
                                        textAlign='left'
                                    >
                                    <Heading 
                                        color='red' 
                                        pt={5}
                                    >
                                        Financial Aid
                                    </Heading>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel p={0}>
                                    <Box overflowX="auto">
                                        <Table 
                                            variant='simple' 
                                            backgroundColor="gray.200"
                                        >
                                            <Thead>
                                                <Tr>
                                                    <Th>Student ID</Th>
                                                    <Th>Admit Status</Th>
                                                    <Th>Last Name</Th>
                                                    <Th>First Name</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {
                                                    loading || finAidStudents.length === 0 ? (null) : (
                                                        finAidStudents.map((student) => (
                                                            <Tr 
                                                                key={student.get('studentId')}
                                                            >
                                                                <Td>{student.get('studentId')}</Td>
                                                                <Td>{student.get('admit')}</Td>
                                                                <Td>{student.get('lastName')}</Td>
                                                                <Td>{student.get('firstName')}</Td>
                                                            </Tr>
                                                        ))
                                                    )
                                                }
                                            </Tbody>
                                        </Table>
                                    </Box>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box 
                                        flex ='1' 
                                        textAlign='left'
                                    >
                                    <Heading 
                                        color='red' 
                                        pt={5}
                                    >
                                        Nurse&apos;s Office
                                    </Heading>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel p={0}>
                                    <Box overflowX="auto">
                                        <Table 
                                            variant='simple' 
                                            backgroundColor="gray.200"
                                        >
                                            <Thead>
                                                <Tr>
                                                    <Th>Student ID</Th>
                                                    <Th>Admit Status</Th>
                                                    <Th>Last Name</Th>
                                                    <Th>First Name</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {
                                                    loading || nurseStudents.length === 0 ? (null) : (
                                                        nurseStudents.map((student) => (
                                                            <Tr 
                                                                key={student.get('studentId')}
                                                            >
                                                                <Td>{student.get('studentId')}</Td>
                                                                <Td>{student.get('admit')}</Td>
                                                                <Td>{student.get('lastName')}</Td>
                                                                <Td>{student.get('firstName')}</Td>
                                                            </Tr>
                                                        ))
                                                    )
                                                }
                                            </Tbody>
                                        </Table>
                                    </Box>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box 
                                        flex ='1' 
                                        textAlign='left'
                                    >
                                    <Heading 
                                        color='red' 
                                        pt={5}
                                    >
                                        Parents
                                    </Heading>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel p={0}>
                                    <Box overflowX="auto">
                                        <Table 
                                            variant='simple' 
                                            backgroundColor="gray.200"
                                        >
                                            <Thead>
                                                <Tr>
                                                    <Th>Student ID</Th>
                                                    <Th>Admit Status</Th>
                                                    <Th>Last Name</Th>
                                                    <Th>First Name</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {
                                                    loading || parentsStudents.length === 0 ? (null) : (
                                                        parentsStudents.map((student) => (
                                                            <Tr 
                                                                key={student.get('studentId')}
                                                            >
                                                                <Td>{student.get('studentId')}</Td>
                                                                <Td>{student.get('admit')}</Td>
                                                                <Td>{student.get('lastName')}</Td>
                                                                <Td>{student.get('firstName')}</Td>
                                                            </Tr>
                                                        ))
                                                    )
                                                }
                                            </Tbody>
                                        </Table>
                                    </Box>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Container>
                </TabPanel>
                <TabPanel>
                    <Container maxW="container.xl" py={20}>
                        <Heading color="red">Students</Heading>
                        <Table variant='simple' backgroundColor="gray.200">
                            <Thead>
                                <Tr>
                                    <Th>Student ID</Th>
                                    <Th>Admit</Th>
                                    <Th>Last Name</Th>
                                    <Th>First Name</Th>
                                    <Th>Business Office</Th>
                                    <Th>Financial Aid</Th>
                                    <Th>Nurse</Th>
                                    <Th>Parents</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    loading || students.length === 0 ? (null) : (
                                        students.map((student) => (
                                            <Tr 
                                                key={student.get('studentId')}
                                            >
                                                <Td>{student.get('studentId')}</Td>
                                                <Td>{student.get('admit')}</Td>
                                                <Td>{student.get('lastName')}</Td>
                                                <Td>{student.get('firstName')}</Td>
                                                <Td>{student.get('busOff') ? 'Complete' : 'Incomplete'}</Td>
                                                <Td>{student.get('finAid') ? 'Complete' : 'Incomplete'}</Td>
                                                <Td>{student.get('nurse') ? 'Complete' : 'Incomplete'}</Td>
                                                <Td>{student.get('parents') ? 'Complete' : 'Incomplete'}</Td>
                                            </Tr>
                                        ))
                                    )
                                }
                            </Tbody>
                        </Table>
                    </Container>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
};

export default AdminPage;
