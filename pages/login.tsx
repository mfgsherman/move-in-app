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
    Tabs
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
                <Tabs>
                    <TabList>
                        <Tab onClick={() => setIsStudent(true)}>Student</Tab>
                        <Tab onClick={() => setIsStudent(false)}>Administrator</Tab>
                    </TabList>
                </Tabs>
                <form>
                    <Stack
                    spacing={4}
                    p="1rem"
                    >
                    <FormControl>
                        <InputGroup>
                        <InputLeftElement pointerEvents="none"/>
                        <Input type="username" placeholder="username" />
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            color="gray.300"
                        />
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
            </Box>
        </Stack>
        </Flex>
    );
};

export default LoginPage;
