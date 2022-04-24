import {
    doc,
    setDoc,
    collection
} from "@firebase/firestore";
import XLSX from 'xlsx';
import {firestore} from "./initialize";

export interface ICSVStudent {
    'Student ID': number
    Admit: string
    'Last Name': string
    'First Name': string
    'Business Office': string
    'Financial Aid': string
    'Nurse': string
    Parents: string
}

export interface IStudent {
    studentId: number
    admit: string
    lastName: string
    firstName: string
    busOff: boolean
    finAid: boolean
    nurse: boolean
    parents: boolean
}

type SetStudentDataFunction = (students: IStudent[]) => void
type SetStudentDataLoadingFunction = (loading: boolean) => void

const csvToBool = (completion: string): boolean => (
    completion === 'Yes' || completion === 'yes' ? 
    false : true
)

const CSVtoFirebase = (csvStudent: ICSVStudent): IStudent => ({
    studentId: csvStudent['Student ID'],
    admit: csvStudent['Admit'],
    lastName: csvStudent['Last Name'],
    firstName: csvStudent['First Name'],
    busOff: csvToBool(csvStudent['Business Office']),
    finAid: csvToBool(csvStudent['Financial Aid']),
    nurse: csvToBool(csvStudent['Nurse']),
    parents: csvToBool(csvStudent['Parents'])
});

export const setStudentDataFromCSV = (
    fileEvent: React.ChangeEvent<HTMLInputElement>,
    setStudentData: SetStudentDataFunction,
    setStudentDataLoading: SetStudentDataLoadingFunction
): void => {
    setStudentDataLoading(true);

    const file = fileEvent.target.files ? fileEvent.target.files[0] : null;

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', async (event: ProgressEvent<FileReader>): Promise<void> => {
            const content = event.target?.result || null;

            if (content) {
                let studentData = [] as IStudent[];

                const data = new Uint8Array(content as ArrayBuffer);
                const workbook = XLSX.read(data, {type: 'array'});
                const csvStudentData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]) as ICSVStudent[];
                csvStudentData.forEach((csvStudent, index) => {
                    studentData.push(CSVtoFirebase(csvStudent));
                });
                setStudentData(studentData);
            }

            setStudentDataLoading(false);
        });

        reader.readAsArrayBuffer(file);
    }
};

export const uploadStudentData = (studentData: IStudent[]) => {
    const date = new Date().toISOString();

    setDoc(doc(firestore, 'development', date), {date: date});
    
    studentData.forEach((student) => {
        setDoc(doc(firestore, `development/${date}/student-data`, student.studentId.toString()), student);
    })
}