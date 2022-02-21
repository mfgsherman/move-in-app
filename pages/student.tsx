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
    Flex
} from '@chakra-ui/react';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel
} from '@chakra-ui/accordion'


const StudentPage = () => (
    <Container maxW="container.xl" py={20}>
        <Heading color="red">John Smith - 2038452</Heading>
        <Accordion allowMultiple>
            <Table variant='simple'>
                    <Flex
                    w={['320px','425px','768px', '1024px']}
                    maxW='1024px'
                    justify='center'
                    direction={['column']}
                    >
                        <Thead>
                            <AccordionItem>
                                <Tr>
                                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                                        <GridItem w={[100,200,300]}>
                                            <Th>Status</Th>
                                        </GridItem>
                                        <GridItem w={[100,200,300]}>
                                            <Th>Departments</Th>
                                        </GridItem>
                                        <GridItem w={[100,200,300]}>
                                            <Th>Location</Th>
                                        </GridItem>
                                        <GridItem w={[100,200,300]}>
                                            <Th>Hours Open</Th>
                                        </GridItem>
                                    </Grid>
                                </Tr>

                            </AccordionItem>
                        </Thead>

                        <Tbody>
                        <AccordionItem>
                            <AccordionButton>
                                <Tr backgroundColor="red.100">
                                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                                        <GridItem w={[100,200,300]} >
                                            <Td h={['110px', '80px', '50px', '50px']}>Incomplete</Td>
                                        </GridItem>
                                        <GridItem w={[100,200,300]} >
                                            <Td h={['110px', '80px', '50px', '50px']}>Business Office</Td>
                                        </GridItem>

                                        <GridItem w={[100,200,300]} >
                                            <Td h={['110px', '80px', '50px', '50px']}>St Benedicts Rm 104</Td>
                                        </GridItem>
                                        <GridItem w={[100,200,300]} >
                                            <Td h={['110px', '80px', '50px', '50px']}>11:30AM-3:30PM</Td>
                                        </GridItem>
                                    </Grid>
                                </Tr>
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
                                <Tr backgroundColor="red.100">
                                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                                        <GridItem w={[100,200,300]} >
                                            <Td h={['110px', '80px', '50px', '50px']}>Incomplete</Td>
                                        </GridItem>
                                        <GridItem w={[100,200,300]} >
                                            <Td h={['110px', '80px', '50px', '50px']}>Nurse&apos;s Office</Td>
                                        </GridItem>

                                        <GridItem w={[100,200,300]} >
                                            <Td h={['110px', '80px', '50px', '50px']}>Health Center Rm 107</Td>
                                        </GridItem>
                                        <GridItem w={[100,200,300]} >
                                            <Td h={['110px', '80px', '50px', '50px']}>9:30AM-3PM</Td>
                                        </GridItem>
                                    </Grid>
                                </Tr>
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
                                <Tr backgroundColor="green.100">
                                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                                        <GridItem w={[100,200,300]}>
                                            <Td h={['110px', '80px', '50px', '50px']}>Complete</Td>
                                        </GridItem>
                                        <GridItem w={[100,200,300]}>
                                            <Td h={['110px', '80px', '50px', '50px']}>Financial Aid</Td>
                                        </GridItem>
                                        <GridItem w={[100,200,300]}>
                                            <Td h={['110px', '80px', '50px', '50px']}>St Benedicts Rm 402</Td>
                                        </GridItem>
                                        <GridItem w={[100,200,300]}>
                                            <Td h={['110px', '80px', '50px', '50px']}>11:30AM-3:30PM</Td>
                                        </GridItem>
                                    </Grid>
                                </Tr>
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
                                <Tr backgroundColor="green.100" >
                                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                                        <GridItem w={[100,200,300]}>
                                            <Td h={['110px', '80px', '50px', '50px']}>Complete</Td>
                                        </GridItem>
                                        <GridItem w={[100,200,300]}>
                                            <Td h={['110px', '80px', '50px', '50px']}>Athletics</Td>
                                        </GridItem>
                                        <GridItem w={[100,200,300]}>
                                            <Td h={['110px', '80px', '50px', '50px']}>Ferrel Academic Center Rm 107</Td>
                                        </GridItem>
                                        <GridItem w={[100,200,300]}>
                                            <Td h={['110px', '80px', '50px', '50px']}>9AM-12:30PM</Td>
                                        </GridItem>
                                    </Grid>
                                </Tr>
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
                </Flex>
            </Table>
        </Accordion>

    </Container>
);

export default StudentPage;

