import { useState } from "react";
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
    TabList,
    Tab,
    Tabs,    
    TabPanel,
    TabPanels
  } from "@chakra-ui/react";
import Link from "next/link";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isStudent, setIsStudent] = useState(true);
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
            <Avatar bg="red" />
            <Heading color="red">Move-In Day Checklist</Heading>
            <Box minW={{ base: "90%", md: "468px" }} backgroundColor="whiteAlpha.900" boxShadow="md">
                <Tabs defaultIndex={0}>
                    <TabList>                        
                        <Tab>Student</Tab>
                        <Tab>Administrator</Tab>                        
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                        <form onClick={() => setIsStudent(true)}>                    
                            <Stack spacing={4} p="1rem">
                            <FormControl>
                                <InputGroup>
                                <InputLeftElement pointerEvents="none"/>
                                <Input type="username" placeholder="Enter ID or Lastname"/>
                                </InputGroup>
                            </FormControl>

                            <Link {... isStudent ? {href: "/student"} : {href: "/admin"}}>
                                <Button
                                    borderRadius={0}
                                    type="submit"
                                    variant="solid"
                                    colorScheme="red"
                                    width="full"
                                    >
                                    Login
                                </Button>
                            </Link>
                            </Stack>
                        </form>
                        </TabPanel>
                        <TabPanel>
                        <form onClick={() => setIsStudent(false)}>                    
                            <Stack spacing={4} p="1rem">
                            <FormControl>
                                <InputGroup>
                                <InputLeftElement pointerEvents="none"/>
                                <Input type="username" placeholder="Username"/>
                                </InputGroup>
                            </FormControl>

                            <FormControl>
                                <InputGroup>
                                <InputLeftElement pointerEvents="none" color="gray.300"/>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    
                                />
                                <InputRightElement width="4.5rem">
                                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                    {showPassword ? "Hide" : "Show"}
                                    </Button>
                                </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Link {... isStudent ? {href: "/student"} : {href: "/admin"}}>
                                <Button
                                    borderRadius={0}
                                    type="submit"
                                    variant="solid"
                                    colorScheme="red"
                                    width="full"
                                    >
                                    Login
                                </Button>
                            </Link>
                            </Stack>
                        </form>
                        </TabPanel>                    
                    </TabPanels>
                </Tabs>                         
            </Box>                        
        </Stack>
        </Flex>
    );
};

export default LoginPage;
