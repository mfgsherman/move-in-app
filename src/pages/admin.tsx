import {useState, useEffect, ChangeEvent} from "react";
import {useRouter} from "next/router";
import {
    collection,
    QueryDocumentSnapshot,
    DocumentData,
    getDocs,
    query,
    limit,
    orderBy
} from "@firebase/firestore";
import { 
    Container,
    Heading,
    Tab,
    Tabs, 
    TabList,
    TabPanel,
    TabPanels,
    Input,
    InputGroup,
    Button
} from '@chakra-ui/react';
import {firestore, auth} from "../firebase/initialize";
import {IStudent, setStudentDataFromCSV, uploadStudentData} from '../firebase/upload-pdf';
import PDFUpload from '../components/pdf-upload';
import AdminLogin from "./adminLogin";
import StudentsViewTable from "../components/admin/students-view-table";
import DeptViewAccordion from "../components/admin/dept-view-accordion";
                      
const AdminPage = () => {
    const router = useRouter();

    const [students, setStudents] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [studentData, setStudentData] = useState<IStudent[]>([]);
    const [studentDataLoading, setStudentDataLoading] = useState<boolean>(false);
    const [search, setSearch] = useState('');

    const datesQuery = query(collection(firestore, 'development'), orderBy('date', 'desc'), limit(1));
    
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
        await getDocs(datesQuery)
            .then(async (dateSnapshot) => {
                const date = dateSnapshot.docs[0].get('date');

                await getDocs(query(collection(firestore, `development/${date}/student-data`), orderBy('lastName')))
                    .then((studentSnapshot) => {
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
                pt={5}
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
                <TabList pt={5} pl={'5%'}>
                    <Tab>All Students</Tab>
                    <Tab>By Department</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Container maxW="container.xl" py={10}>
                            <InputGroup size='md' py={5}>
                                <Input
                                id="search"
                                width="40%" 
                                placeholder='Look up students by name or ID' 
                                value={search}
                                onChange={(event: ChangeEvent<any>) => setSearch(event.target.value.trim())}
                                />
                            </InputGroup>
                            <StudentsViewTable
                                loading={loading}
                                students={filteredStudents}
                            ></StudentsViewTable>
                        </Container>
                    </TabPanel>
                    <TabPanel>
                        <Container 
                            maxW="container.xl" 
                            py={20} 
                            px={0}
                        >
                            <DeptViewAccordion
                                students={students}
                                loading={loading}
                            ></DeptViewAccordion>
                        </Container>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
};

export default AdminPage;
