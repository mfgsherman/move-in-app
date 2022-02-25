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
                    <Tabs>
                        <TabList>
                            <Tab color = "#b30838" >Student</Tab>
                            <Tab color = "#b30838" >Administrator</Tab>                        
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <form>                    
                                    <Stack spacing={4} p="1rem">
                                    <FormControl>
                                        <InputGroup>
                                        <InputLeftElement pointerEvents="none"/>
                                        <Input colorScheme = "#b30838" type="username" placeholder="Enter ID or Lastname"/>
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
                            </TabPanel>
                            <TabPanel>
                                <form>                    
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
                                            <Button h="1.75rem" size="sm" color="#b30838" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                        </InputGroup>
                                    </FormControl>
                                    <Link href={"/admin"} passHref>
                                        <Button
                                            borderRadius={0}
                                            type="submit"
                                            variant="ghost"
                                            colorScheme = "gray"
                                            color ="#b30838"
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
