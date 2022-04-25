import { FC } from "react";
import {
    QueryDocumentSnapshot,
    DocumentData
} from "@firebase/firestore";
import {
    Accordion
} from '@chakra-ui/accordion';
import DeptRow from "./dept-row";

const DeptViewAccordion: FC<{
    students: QueryDocumentSnapshot<DocumentData>[],
    loading: boolean
}> = ({students, loading}) => {
    const busOffStudents = students.filter((student) => !student.get('busOff'));
    const finAidStudents = students.filter((student) => !student.get('finAid'));
    const nurseStudents = students.filter((student) => !student.get('nurse'));
    const parentsStudents = students.filter((student) => !student.get('parents'));

    return (
        <Accordion 
            allowToggle
            allowMultiple
        >
            <DeptRow
                deptName={'Business Office'}
                deptStudents={busOffStudents}
                loading={loading}
            ></DeptRow>
            <DeptRow
                deptName={'Financial Aid'}
                deptStudents={finAidStudents}
                loading={loading}
            ></DeptRow>
            <DeptRow
                deptName={'Nurse Office'}
                deptStudents={nurseStudents}
                loading={loading}
            ></DeptRow>
            <DeptRow
                deptName={'Parents'}
                deptStudents={parentsStudents}
                loading={loading}
            ></DeptRow> 
        </Accordion>
    )
}

export default DeptViewAccordion;
