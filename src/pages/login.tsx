import {useState, ChangeEvent} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import {
    doc,
    getDoc,
    query,
    collection,
    orderBy,
    limit,
    getDocs
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
import logo from '/public/top-logo.png';
import campus from '/public/campus-tops.jpg';

const LoginPage = () => {
    const router = useRouter();

    const [id, setId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const datesQuery = query(collection(firestore, 'development'), orderBy('date', 'desc'), limit(1));

    const handleChange = (event: ChangeEvent<any>) => {
        setId(event.target.value);
    }

    const authenticate = async (event: ChangeEvent<any>) => {
        event.preventDefault();

        await getDocs(datesQuery)
            .then(async (dateSnapshot) => {
                const date = dateSnapshot.docs[0].get('date');

                await getDoc(doc(firestore, `development/${date}/student-data`, id))
                    .then((studentSnap) => {
                        if (studentSnap.exists()) {
                            router.push({
                                pathname: '/student',
                                query: {
                                    id: id,
                                    lastUpdated: date
                                }
                            });
                        } else {
                            setErrorMessage('Student ID not found');
                        }
                    })
                    .catch((error) => {
                        setErrorMessage(`${error.code}: ${error.message}`);
                    })
            })
            .catch((error) => {
                setErrorMessage(`${error.code}: ${error.message}`);
            })
    }

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="brand.700"
            justifyContent="row-start"
            alignItems="center"
        >
            <Box
                h="309px"
                w="100%"
                position="absolute"
                bottom="0"
            >
                <Box h="full" w="full" position="relative" >
                    <Image alt='campus' src={campus} />
                </Box>   
                <Box w="100%" h="150px" bgGradient='linear(to-b, brand.700, rgba(0,0,0,0))' position="absolute" top="0"/> 
            </Box>
            <Box
                minW={{ base: "90%", md: "468px" }}
                pt={'40px'}
                position="absolute"
            >
                <Image alt='logo' src={logo} layout="responsive" />
            </Box>
            <Box 
                mt={'300px'}
                minW={{ base: "90%", md: "468px" }}
                backgroundColor="#ffffff"
                boxShadow="xl"
                position="absolute"
            >
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Avatar bg="#b30838" mt={4}/>
                    <Heading color= "#b30838" >Move-In Day Checklist</Heading>
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
                                colorScheme="brand"
                                onClick={authenticate}
                                type="button"
                                variant="solid"
                                width="full"
                            >
                                LOGIN
                            </Button>
                        </Stack>
                    </form>        
                </Stack>    
            </Box>
            {errorMessage &&
                <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>{errorMessage}</AlertTitle>
                </Alert>
            }
        </Flex>
    );
};

export default LoginPage;
