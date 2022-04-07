import {useState, useEffect, ChangeEvent} from "react";
import {useRouter} from "next/router";
import {
    collection,
    QueryDocumentSnapshot,
    DocumentData,
    getDocs,
    doc,
    getDoc,
    query,
    where, 
    limit,
    documentId
} from "@firebase/firestore";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    Box,
    Avatar,
    FormControl,
    Alert,
    AlertIcon,
    AlertTitle
  } from "@chakra-ui/react";
import {firestore} from '../firebase/initialize';

const LoginPage = () => {
    const router = useRouter(); 
    const [id, setId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleChange = (event: ChangeEvent<any>) => {
        setId(event.target.value);
    }

    const authenticate = async (event: ChangeEvent<any>) => {
        event.preventDefault();

        const studentRef = doc(firestore, 'student-data', id);
        await getDoc(studentRef)
            .then((studentSnap) => {
                if (studentSnap.exists()) {
                    router.push({
                        pathname: '/student',
                        query: {id: id}
                    });
                } else {
                    setErrorMessage('Student ID not found');
                }
            })
            .catch((error) => {
                setErrorMessage(`${error.code}: ${error.message}`);
            }) 
    }

    // useEffect(() => {
    //     getStudents();

    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000)
    // });

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg="#b30838" />
                <Heading color= "#b30838" >Move-In Day Checklist</Heading>
                <Box minW={{ base: "90%", md: "468px" }} backgroundColor="whiteAlpha.900" boxShadow="md">
                    <form onSubmit={authenticate}>
                        <Stack spacing={4} p="1rem">
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none"/>
                                    <Input 
                                        colorScheme = "#b30838"
                                        onChange={handleChange}
                                        placeholder="Enter Student ID"
                                        type="username"
                                    />
                                </InputGroup>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                color = "#b30838"
                                // disabled={loading}
                                onClick={authenticate}
                                type="button"
                                variant="ghost"
                                width="full"
                                >
                                Login
                            </Button>
                        </Stack>
                    </form>       
                </Box>  
                {errorMessage &&
                    <Alert status='error'>
                        <AlertIcon />
                        <AlertTitle>{errorMessage}</AlertTitle>
                    </Alert>
                }                      
            </Stack>
        </Flex>
    );
};

export default LoginPage;
