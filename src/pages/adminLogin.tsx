import {useState, ChangeEvent} from "react";
import {useRouter} from "next/router";
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
                <Heading color= "#b30838">Move-In Day Checklist</Heading>
                <Heading color= "#b30838">Administrator Dashboard</Heading>
                <Box minW={{ base: "90%", md: "468px" }} backgroundColor="whiteAlpha.900" boxShadow="md">
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
                                color ="#b30838"
                                colorScheme = "gray"
                                onClick={login}
                                type="submit"
                                variant="ghost"
                                width="full"
                                >
                                Login
                            </Button>
                        </Link>
                        </Stack>
                    </form>                     
                </Box>
                {error &&
                    <Alert status='error'>
                        <AlertIcon />
                        <AlertTitle>{errorMessage}</AlertTitle>
                    </Alert>
                }                     
            </Stack>
        </Flex>
    );
};

export default AdminLogin;
