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

const AdminPage = () => (
    <Container maxW="container.xl" py={20}>
        <Heading color="red">Business Office</Heading>
        <Table variant='simple' backgroundColor="gray.200">
            <Thead>
                <Tr>
                    <Th>Student ID</Th>
                    <Th>Admit Status</Th>
                    <Th>Last Name</Th>
                    <Th>First Name</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>2038452</Td>
                    <Td>Freshman</Td>
                    <Td>Smith</Td>
                    <Td>John</Td>
                </Tr>
                <Tr>
                    <Td>1234567</Td>
                    <Td>Transfer</Td>
                    <Td>Ptak</Td>
                    <Td>Benjamin</Td>
                </Tr>
                <Tr>
                    <Td>7654321</Td>
                    <Td>Freshman</Td>
                    <Td>Monares</Td>
                    <Td>Michael</Td>
                </Tr>
            </Tbody>
        </Table>
        <Heading color="red" pt={5}>Financial Aid</Heading>
        <Table variant='simple' backgroundColor="gray.200">
            <Thead>
                <Tr>
                    <Th>Student ID</Th>
                    <Th>Admit Status</Th>
                    <Th>Last Name</Th>
                    <Th>First Name</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>2038452</Td>
                    <Td>Freshman</Td>
                    <Td>Smith</Td>
                    <Td>John</Td>
                </Tr>
                <Tr>
                    <Td>1234567</Td>
                    <Td>Transfer</Td>
                    <Td>Ptak</Td>
                    <Td>Benjamin</Td>
                </Tr>
                <Tr>
                    <Td>7654321</Td>
                    <Td>Freshman</Td>
                    <Td>Monares</Td>
                    <Td>Michael</Td>
                </Tr>
            </Tbody>
        </Table>
        <Heading color="red" pt={5}>Nurse's Office</Heading>
        <Table variant='simple' backgroundColor="gray.200">
            <Thead>
                <Tr>
                    <Th>Student ID</Th>
                    <Th>Admit Status</Th>
                    <Th>Last Name</Th>
                    <Th>First Name</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>2038452</Td>
                    <Td>Freshman</Td>
                    <Td>Smith</Td>
                    <Td>John</Td>
                </Tr>
                <Tr>
                    <Td>1234567</Td>
                    <Td>Transfer</Td>
                    <Td>Ptak</Td>
                    <Td>Benjamin</Td>
                </Tr>
                <Tr>
                    <Td>7654321</Td>
                    <Td>Freshman</Td>
                    <Td>Monares</Td>
                    <Td>Michael</Td>
                </Tr>
            </Tbody>
        </Table>
        <Heading color="red" pt={5}>Athletics</Heading>
        <Table variant='simple' backgroundColor="gray.200">
            <Thead>
                <Tr>
                    <Th>Student ID</Th>
                    <Th>Admit Status</Th>
                    <Th>Last Name</Th>
                    <Th>First Name</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>2038452</Td>
                    <Td>Freshman</Td>
                    <Td>Smith</Td>
                    <Td>John</Td>
                </Tr>
                <Tr>
                    <Td>1234567</Td>
                    <Td>Transfer</Td>
                    <Td>Ptak</Td>
                    <Td>Benjamin</Td>
                </Tr>
                <Tr>
                    <Td>7654321</Td>
                    <Td>Freshman</Td>
                    <Td>Monares</Td>
                    <Td>Michael</Td>
                </Tr>
            </Tbody>
        </Table>
    </Container>
);

export default AdminPage;
