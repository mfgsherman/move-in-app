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

const StudentPage = () => (
    <Container maxW="container.xl" py={20}>
        <Heading color="red">John Smith - 2038452</Heading>
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
                <Tr backgroundColor="red.100">
                    <Td>Incomplete</Td>
                    <Td>Business Office</Td>
                    <Td>St Benedicts Rm 104</Td>
                    <Td>11:30AM-3:30PM</Td>
                </Tr>
                <Tr backgroundColor="red.100">
                    <Td>Incomplete</Td>
                    <Td>Nurse's Office</Td>
                    <Td>Health Center Rm 107</Td>
                    <Td>9:30AM-2PM</Td>
                </Tr>
                <Tr backgroundColor="green.100">
                    <Td>Complete</Td>
                    <Td>Financial Aid</Td>
                    <Td>St Benedicts Rm 402</Td>
                    <Td>11:30AM-3:30PM</Td>
                </Tr>
                <Tr backgroundColor="green.100">
                    <Td>Complete</Td>
                    <Td>Athletics</Td>
                    <Td>Ferrel Academic Center Rm 107</Td>
                    <Td>9AM-12:30PM</Td>
                </Tr>
            </Tbody>
        </Table>
    </Container>
);

export default StudentPage;
