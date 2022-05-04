import { FC } from "react";
import { 
    QueryDocumentSnapshot,
    DocumentData
} from "firebase/firestore";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Skeleton,
    Stack
} from '@chakra-ui/react';

const StudentsViewTable: FC<{
    loading: boolean,
    students: QueryDocumentSnapshot<DocumentData>[]
}> = ({loading, students}) => {
    if (loading) {
        return (
            <Stack>
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
            </Stack>
        )
    }

    return (
        <Table 
            id='studentTable'
            variant='simple'
            backgroundColor="#EDEDED"
        >
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
                        students.length === 0 ? (null) : (
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
    );
};

export default StudentsViewTable;
