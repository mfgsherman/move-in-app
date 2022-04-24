import {useState, useEffect, ChangeEvent} from "react";
import {useRouter} from "next/router";
import {
    collection,
    QueryDocumentSnapshot,
    DocumentData,
    getDocs,
    doc,
    query,
    limit,
    getDoc,
    orderBy
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
    TabPanels,
    Input,
    InputGroup,
    Button
} from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
} from '@chakra-ui/accordion';
import {firestore, auth} from "../firebase/initialize";
import {IStudent, setStudentDataFromCSV, uploadStudentData} from '../firebase/upload-pdf';
import PDFUpload from '../components/pdf-upload';
import AdminLogin from "./adminLogin";
                      
const AdminPage = () => {
    const router = useRouter();

    const [students, setStudents] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [studentData, setStudentData] = useState<IStudent[]>([]);
    const [studentDataLoading, setStudentDataLoading] = useState<boolean>(false);
    const [search, setSearch] = useState('');

    const studentQuery = query(collection(firestore, 'development'), orderBy('date', 'desc'), limit(1));

    const busOffStudents = students.filter((student) => !student.get('busOff'));
    const finAidStudents = students.filter((student) => !student.get('finAid'));
    const nurseStudents = students.filter((student) => !student.get('nurse'));
    const parentsStudents = students.filter((student) => !student.get('parents'));
    
    const filterSearch = (students: QueryDocumentSnapshot<DocumentData>[]): QueryDocumentSnapshot<DocumentData>[] => (
        students.filter((student) =>
            student.get('lastName').toLowerCase().includes(search.toLowerCase()) ||
            student.get('firstName').toLowerCase().includes(search.toLowerCase()) ||
            student.get('studentId').toString().includes(search)
        )
    );

    const filteredStudents = filterSearch(students);

    const logout = () => {
        auth.signOut();
        router.push('/admin');
    }

    const getStudents = async () => {
        await getDocs(studentQuery)
            .then(async (dateSnapshot) => {
                console.log('datesnapshot: ', dateSnapshot);
                const date = dateSnapshot.docs[0].get('date');

                await getDocs(query(collection(firestore, `development/${date}/student-data`), orderBy('lastName')))
                    .then((studentSnapshot) => {
                        console.log('studentsnapshot: ', studentSnapshot);

                        const result: QueryDocumentSnapshot<DocumentData>[] = [];
                        studentSnapshot.forEach((student) => {
                            result.push(student);
                        });

                        setStudents(result);
                        setLoading(false);
                    })
            });
    };

    useEffect(() => {
        getStudents();
    });

    if (!auth.currentUser) {
        return <AdminLogin />
    }

    return (
        <>
         <Button
            borderRadius={0}
            color ="#b30838"
            colorScheme = "gray"
            onClick={logout}
            type="submit"
            variant="link"
            width="200px"
        >
            Sign out
        </Button>
        <Tabs>
            <PDFUpload
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setStudentDataFromCSV(event, setStudentData, setStudentDataLoading)
                }
                onUploadClick={async () => uploadStudentData(studentData)}
            >
            </PDFUpload>
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
                                        color= "#b30838"
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
                                        color= "#b30838" 
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
                                        color= "#b30838" 
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
                                        color= "#b30838" 
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
                    <InputGroup size='md'>
                        <Input
                        id="search"
                        width="20%" 
                        placeholder='Look up students by name or ID' 
                        value={search}
                        onChange={(event: ChangeEvent<any>) => setSearch(event.target.value.trim())}
                        />
                    </InputGroup>
                    <Container maxW="container.xl" py={20}>
                        <Heading color= "#b30838" >Students</Heading>
                        <Table id='studentTable' variant='simple' backgroundColor="gray.200">
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
                                    loading || filteredStudents.length === 0 ? (null) : (
                                        filteredStudents.map((student) => (
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
        </>
    )
};

export default AdminPage;
