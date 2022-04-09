import {FC} from "react";
import {
    DocumentSnapshot,
    DocumentData
} from "@firebase/firestore";
import {
    Container,
    Heading,
    Table,
    Tbody,
    Flex,
    SkeletonText
} from '@chakra-ui/react';
import {Accordion} from '@chakra-ui/accordion';
import ChecklistHeader from './checklist-header';
import ChecklistRow from "./check-list-row";
import { 
    busOffDescription,
    finAidDescription,
    nurseDescription,
    parentsDescription
} from "../../descriptions";

const StudentChecklist: FC<{
    student: DocumentSnapshot<DocumentData> | undefined,
    loading: boolean
}> = ({student, loading}) => {
    const firstName = student?.get('firstName') as string;
    const lastName = student?.get('lastName') as string;
    const busOffCompletion = student?.get('busOff') as boolean;
    const finAidCompletion = student?.get('finAid') as boolean;
    const nurseCompletion = student?.get('nurse') as boolean;
    const parentsCompletion = student?.get('parents') as boolean;

    return (
        <Container maxW="container.xl" py={20}>
            <SkeletonText isLoaded={!loading}>
                <Heading color = "gray">
                    {`${firstName} ${lastName}`}
                </Heading>
            </SkeletonText>
            <Accordion allowMultiple>
                <Table variant='simple'>
                    <Flex
                        w={['320px','425px','768px', '1024px']}
                        maxW='1024px'
                        justify='center'
                        direction={['column']}
                    >
                        <Tbody>
                            <ChecklistHeader />
                            <ChecklistRow 
                                loading={loading}
                                incomplete={busOffCompletion}
                                department={'Business Office'}
                                location={'St Benedicts Rm 104'}
                                hrsOpen={'11:30AM-3:30PM'}
                                description={busOffDescription}
                            />
                            <ChecklistRow 
                                loading={loading}
                                incomplete={finAidCompletion}
                                department={'Financial Aid'}
                                location={'St Benedicts Rm 402'}
                                hrsOpen={'11:30AM-3:30PM'}
                                description={finAidDescription}
                            />
                            <ChecklistRow 
                                loading={loading}
                                incomplete={nurseCompletion}
                                department={'Nurse Office'}
                                location={'Health Center Rm 107'}
                                hrsOpen={'9:30AM-2PM'}
                                description={nurseDescription}
                            />
                            <ChecklistRow 
                                loading={loading}
                                incomplete={parentsCompletion}
                                department={'Parents'}
                                location={'Ferrel Academic Center'}
                                hrsOpen={'9AM-12:30PM'}
                                description={parentsDescription}
                            />
                        </Tbody>
                    </Flex>
                </Table>
            </Accordion>
        </Container>
    )
};

export default StudentChecklist;
