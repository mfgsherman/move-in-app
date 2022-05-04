import { FC } from "react";
import {
    QueryDocumentSnapshot,
    DocumentData
} from "@firebase/firestore";
import {
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    Stack,
    Skeleton
} from '@chakra-ui/react';
import {
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
} from '@chakra-ui/accordion';

const DeptRow: FC<{
    deptName: string,
    deptStudents: QueryDocumentSnapshot<DocumentData>[],
    loading: boolean
}> = ({deptName, deptStudents, loading}) => (
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
                    {deptName}
                </Heading>
            </Box>
            <AccordionIcon />
        </AccordionButton>
        <AccordionPanel p={0}>
            <Box overflowX="auto">
                {
                    loading ? (
                        <Stack>
                            <Skeleton height='40px' />
                            <Skeleton height='40px' />
                            <Skeleton height='40px' />
                            <Skeleton height='40px' />
                            <Skeleton height='40px' />
                            <Skeleton height='40px' />
                        </Stack>
                    ) : (
                        <Table 
                            variant='simple' 
                            backgroundColor="#EDEDED"
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
                                    deptStudents.length === 0 ? (null) : (
                                        deptStudents.map((student) => (
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
                    )
                }
            </Box>
        </AccordionPanel>
    </AccordionItem>
);

export default DeptRow;
