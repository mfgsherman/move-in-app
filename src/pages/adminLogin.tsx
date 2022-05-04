import {useState, ChangeEvent} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
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
    InputRightElement,
    Alert,
    AlertIcon,
    AlertTitle
  } from "@chakra-ui/react";
import Link from "next/link";
import {auth} from "../firebase/initialize";
import {signInWithEmailAndPassword} from "firebase/auth";
import logo from '/public/top-logo.png';
import campus from '/public/campus-tops.jpg';

const AdminLogin = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const handleEmailChange = (event: ChangeEvent<any>) => setEmail(event.target.value);
    const handlePasswordChange = (event: ChangeEvent<any>) => setPassword(event.target.value);
    const handleShowClick = () => setShowPassword(!showPassword);

    const login = () =>
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                router.push("/admin");
            })
            .catch((error) => {
                setErrorMessage(`${error.code}: ${error.message}`);
                setError(true);
            });

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
                minW={{ base: "90%", md: "468px" }}
                py={'40px'}
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
                    <Heading color= "#b30838">Move-In Day Application</Heading>
                    <Heading color= "#0B0905" size='md'>Administrator Dashboard</Heading>
                    <form>                    
                        <Stack spacing={4} p="1rem">
                        <FormControl>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none"/>
                                <Input
                                    onChange={handleEmailChange}
                                    placeholder="Email"
                                    type="username"
                                    value={email}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none" color="gray.300"/>
                                <Input
                                    onChange={handlePasswordChange}
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                />
                            <InputRightElement width="4.5rem">
                                <Button
                                    h="1.75rem"
                                    size="sm"
                                    color="#b30838"
                                    onClick={handleShowClick}
                                >
                                {showPassword ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Link href={"/admin"} passHref>
                            <Button
                                borderRadius={0}
                                colorScheme = "brand"
                                onClick={login}
                                type="submit"
                                variant="solid"
                                width="full"
                            >
                                LOGIN
                            </Button>
                        </Link>
                        </Stack>
                    </form>   
                </Stack>                  
            </Box>
            {error &&
                <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>{errorMessage}</AlertTitle>
                </Alert>
            }                     
        </Flex>
    );
};

export default AdminLogin;
