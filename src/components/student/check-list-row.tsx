import {FC} from 'react';
import {
    Tr,
    Td,
    Grid,
    GridItem,
    Skeleton
} from '@chakra-ui/react';
import {
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel
} from '@chakra-ui/accordion';

interface CheckListRowProps {
    loading: boolean,
    incomplete: boolean,
    department: string,
    location: string,
    hrsOpen: string,
    description: string
}

const ChecklistRow: FC<CheckListRowProps> = ({
    loading,
    incomplete,
    department,
    location,
    hrsOpen,
    description
}) => {
    return (
        <AccordionItem>
            <AccordionButton>
            <Skeleton isLoaded={!loading}>
                <Tr backgroundColor={loading ? 'gray.100' : incomplete ? 'green.100' : 'red.100'}>
                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                        <GridItem w={[100,200,300]} >
                            <Td h={['110px', '80px', '50px', '50px']}>{loading ? 'Loading' : incomplete ? 'Complete' : 'Incomplete'}</Td>
                        </GridItem>
                        <GridItem w={[100,200,300]} >
                            <Td h={['110px', '80px', '50px', '50px']}>{department}</Td>
                        </GridItem>
                        <GridItem w={[100,200,300]} >
                            <Td h={['110px', '80px', '50px', '50px']}>{location}</Td>
                        </GridItem>
                        <GridItem w={[100,200,300]} >
                            <Td>{hrsOpen}</Td>
                        </GridItem>
                    </Grid>
                </Tr>
                </Skeleton>
                <AccordionIcon/>
            </AccordionButton>
            <AccordionPanel pb='4'>
                {description}
            </AccordionPanel>
        </AccordionItem>
    )
};

export default ChecklistRow;
