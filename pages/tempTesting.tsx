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
    Box,
    Flex
} from '@chakra-ui/react';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel
} from '@chakra-ui/accordion'

// import { createBreakpoints } from '@chakra-ui/theme-tools'

// const breakpoints = createBreakpoints({
//   sm: '30em',
//   md: '48em',
//   lg: '62em',
//   xl: '80em',
//   '2xl': '96em',
// })

//base is phones    100%
// next is slightly larger devices  50% - 480px
//next is tablets   25% - 768px
//next is laptops   15% - 992px



const StudentPage = () => (
    <Container maxW="container.xl" py={20}>
        <Heading color="red">John Smith - 2038452</Heading>
        <Accordion allowMultiple>
        <Flex
        maxW='1002px'
        w={['80vw']}
        justify='center'
        p='4'
        >

        <Table variant='simple'>
            <AccordionItem>
                    <Thead>
                        <Flex align='center' mx='2'>
                            <Tr>
                                <Th>Status</Th>
                                <Th>Departments</Th>
                                <Th>Location</Th>
                                <Th>Hours Open</Th>
                            </Tr>

                        </Flex>
                    </Thead>
                </AccordionItem>
                <Tbody>
                <AccordionItem>
                    <AccordionButton>
                        <Flex align='center' mx='2'>
                            <Tr backgroundColor="red.100">
                                <Td>Incomplete</Td>
                                <Td>Business Office</Td>
                                <Td>St Benedicts Rm 104</Td>
                                <Td>11:30AM-3:30PM</Td>
                            </Tr>
                        </Flex>
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
                        <Flex align='center' mx='2'>
                            <Tr backgroundColor="red.100">
                                        <Td>Incomplete</Td>
                                        <Td>Nurse&apos;s Office</Td>
                                        <Td>Health Center Rm 107</Td>
                                        <Td>9:30AM-2PM</Td>
                            </Tr>

                        </Flex>
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
                        <Flex align='center' mx='2'>
                            <Tr backgroundColor="green.100">
                                        <Td>Complete</Td>
                                        <Td>Financial Aid</Td>
                                        <Td>St Benedicts Rm 402</Td>
                                        <Td>11:30AM-3:30PM</Td>
                            </Tr>
                        </Flex>
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
                        <Flex align='center' mx='2'>
                            <Tr backgroundColor="green.100">
                                        <Td>Complete</Td>
                                        <Td>Athletics</Td>
                                        <Td>Ferrel Academic Center Rm 107</Td>
                                        <Td>9AM-12:30PM</Td>
                            </Tr>
                        </Flex>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb='4'>
                    The Benedictine College Intercollegiate Athletic Department affirms a holistic 
                    approach to education formalized in goals that are intended to promote intellectual, 
                    social, physical and spiritual growth of student-athletes.
                    <br/>
                    The athletic arena provides an extended education for the student-athlete. 
                    Participation in intercollegiate sports provides a learning laboratory for each student-athlete. 
                    Benedictine College offers a balanced sponsorship of sports for me and women. The athletic program 
                    for men includes baseball, basketball, cross country, football soccer, track &amp; field, wrestling and 
                    lacrosse. The intercollegiate sports for women are basketball, cross country, dance, soccer, softball,
                     spirit squad (cheer), track &amp; field, volleyball and lacrosse.
                    </AccordionPanel>
                </AccordionItem>
            </Tbody>
        </Table>
        </Flex>
        </Accordion>

    </Container>
);

export default StudentPage;

///////////////////////////////////////////////////////////////////////////
