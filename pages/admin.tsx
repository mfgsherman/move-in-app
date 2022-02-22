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
    IconButton,
    CloseButton,
    Flex,
    Icon,
    Link,
    Drawer,
    DrawerCloseButton,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    useColorModeValue,
    Button,
    DrawerOverlay,
    Input,
    Stack
} from '@chakra-ui/react';
import React, {ReactNode} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
} from '@chakra-ui/accordion'

function DrawerOptions() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button position='absolute' top='0' right='0' onClick={onOpen}>&gt;&gt;</Button>
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Settings</DrawerHeader>
                    <DrawerBody>
                        <Stack direction='column' spacing={4}>
                            <p><b>Upload CSV</b></p>
                            <Input  p='1' type='file'/>
                            <Button>Submit</Button>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}


const AdminPage = () => (
    <Container 
    maxW="container.xl" 
    py={20} 
    px={0}
    >
        {DrawerOptions()}
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
                        Athletics
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
                    </Box>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </Container>
);

export default AdminPage;
