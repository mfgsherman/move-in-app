import {useState} from "react";
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
    FormControl
  } from "@chakra-ui/react";
import Link from "next/link";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);    

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
                    <form>                    
                        <Stack spacing={4} p="1rem">
                        <FormControl>
                            <InputGroup>
                            <InputLeftElement pointerEvents="none"/>
                            <Input colorScheme = "#b30838" type="username" placeholder="Enter Student ID"/>
                            </InputGroup>
                        </FormControl>
                        <Link href={"/student"} passHref>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="ghost"
                                color = "#b30838"
                                width="full"
                                >
                                Login
                            </Button>
                        </Link>
                        </Stack>
                    </form>       
                </Box>                        
            </Stack>
        </Flex>
    );
};

export default LoginPage;
