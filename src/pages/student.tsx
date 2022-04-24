import {useState, useEffect} from 'react';
import {GetServerSidePropsContext} from 'next';
import {
    DocumentSnapshot,
    DocumentData,
    doc,
    getDoc
} from "@firebase/firestore";
import {firestore} from '../firebase/initialize';
import {ParsedUrlQuery} from 'querystring';
import StudentChecklist from '../components/student/student-checklist';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const {id, lastUpdated} = context.query;

    return {props: {id, lastUpdated}}
}
 
const StudentPage = ({id, lastUpdated}: ParsedUrlQuery) => {
    const [student, setStudent] = useState<DocumentSnapshot<DocumentData>>();
    const [loading, setLoading] = useState<boolean>(true);

    const studentRef = doc(firestore, `development/${lastUpdated}/student-data`, id as string);

    const getStudent = async () => {
        await getDoc(studentRef)
            .then((studentSnap) => {
                if (studentSnap.exists()) {
                    setStudent(studentSnap);
                    setLoading(false);
                }
            })
    };

    useEffect(() => {
        getStudent();
    });

    return (
        <StudentChecklist 
            student={student}
            loading={loading}
        />
    )
};

export default StudentPage;
