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
import {
    Container,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
} from '@chakra-ui/react';
import firestore from '../firebase/initialize';

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
            <Heading color="red">{loading ? null : students[0].get('firstName') + ' ' + students[0].get('lastName')}</Heading>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Status</Th>
                        <Th>Department</Th>
                        <Th>Location</Th>
                        <Th>Hours Open</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr backgroundColor={loading ? 'gray.100' : students[0].get('busOff') ? 'green.100' : 'red.100'}>
                        <Td>{loading ? 'Loading' : students[0].get('busOff') ? 'Complete' : 'Incomplete'}</Td>
                        <Td>Business Office</Td>
                        <Td>St Benedicts Rm 104</Td>
                        <Td>11:30AM-3:30PM</Td>
                    </Tr>
                    <Tr backgroundColor={loading ? 'gray.100' : students[0].get('finAid') ? 'green.100' : 'red.100'}>
                        <Td>{loading ? 'Loading' : students[0].get('finAid') ? 'Complete' : 'Incomplete'}</Td>
                        <Td>Nurse&apos;s Office</Td>
                        <Td>Health Center Rm 107</Td>
                        <Td>9:30AM-2PM</Td>
                    </Tr>
                    <Tr backgroundColor={loading ? 'gray.100' : students[0].get('nurse') ? 'green.100' : 'red.100'}>
                        <Td>{loading ? 'Loading' : students[0].get('nurse') ? 'Complete' : 'Incomplete'}</Td>
                        <Td>Financial Aid</Td>
                        <Td>St Benedicts Rm 402</Td>
                        <Td>11:30AM-3:30PM</Td>
                    </Tr>
                    <Tr backgroundColor={loading ? 'gray.100' : students[0].get('parents') ? 'green.100' : 'red.100'}>
                        <Td>{loading ? 'Loading' : students[0].get('parents') ? 'Complete' : 'Incomplete'}</Td>
                        <Td>Parents</Td>
                        <Td>Ferrel Academic Center Rm 107</Td>
                        <Td>9AM-12:30PM</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Container>
    )
};

export default StudentPage;
