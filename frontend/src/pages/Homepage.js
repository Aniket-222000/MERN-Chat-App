import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  TabList,
  Tab,
  TabPanel,
  Tabs,
  TabPanels,
} from "@chakra-ui/react";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={1.5}
        bg="white"
        w="100%"
        m="10px 0 10px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize="3xl"
          fontFamily="Work sans"
          color="grey"
          textAlign="center"
          bgGradient="linear(to-l, #0908CA, #FF1080)"
          bgClip="text"
        >
          <strong>Let's Chat</strong>
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={2.5}
        borderRadius="lg"
        color="black"
        borderWidth="1.5px"
      >
        <Tabs isFitted variant="soft-rounded" colorScheme="green">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">SignUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
