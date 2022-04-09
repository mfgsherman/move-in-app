import {
    Thead,
    Tr,
    Th,
    Grid,
    GridItem
} from '@chakra-ui/react';
import {
    AccordionItem
} from '@chakra-ui/accordion'

const ChecklistHeader = () => (
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
);

export default ChecklistHeader;
