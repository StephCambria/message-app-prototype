import React from "react";
import {
  Box,
  ButtonGroup,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../components/style.css";

// ==========================================================
// ==========================================================
// About Page
// ==========================================================
// ==========================================================
const About = () => {
  return (
    <div className="aboutbody">
      <Nav />
      <Container width="100vh" centerContent>
        {/* -------------------------------------------------------- */}
        {/* ----------------------- Header ------------------------- */}
        {/* -------------------------------------------------------- */}
        <Center
          p={3}
          bg={"#6b9e7c"}
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Image
            align="50% 50%"
            src={require("../image/hero.png")}
            alt="Mylo mascot image"
          />
        </Center>

        {/* -------------------------------------------------------- */}
        {/* ----------------------- About Us ----------------------- */}
        {/* -------------------------------------------------------- */}

        <Box
          bg="#474e5d"
          w="100%"
          p="15px 0 0px 0"
          m="15px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <div className="about-section" align="left">
            <h1>
              <strong>About Us</strong>
            </h1>
            <br />
            <p>
              Inspired by Bobby’s homeless cat Mylo, <strong>MyloChat</strong>{" "}
              is a chat-messaging application created with a love for furry
              felines in mind. Clean, sleek, and compact, MyloChat is designed
              to give you a straightforward experience that lets you get right
              to chatting with your friends.
            </p>
          </div>
        </Box>

        {/* -------------------------------------------------------- */}
        {/* ---------------------- Our Mission -------------------- */}
        {/* -------------------------------------------------------- */}
        {/* top */}
        {/* <Box 
          bg="#474e5d" 
          w="100%" 
          p="15px 0 5px 0"
          m="15px 0 15px 0"
          borderRadius="lg" 
          borderWidth="1px"
        >
          <div class="about-section" align="left">
            <h1>
              <strong>Our Mission</strong>
            </h1>
            <br />
            <VStack>
              <Text>
                Whether they are cuddly companions that we keep in our homes, or majestic wildlife that we view from afar, animals are valuable participants of our world. They bring us comfort, teach us about compassion, selflessness, and beauty, and are essential components in this worldwide ecosystem we call Earth.
              </Text>
              <br />
              <Text>
                Despite this, pets and wildlife are in danger around the world. Over 16,000 animal species are endangered with extinction. Every year, at least 10 million animals die from abuse and 1.5 million animals at animal shelters are euthanized in the US alone. About 115 million animals are used in laboratory testing.
              </Text>
              <br />
              <Text>
                But there is good news. Out of all households in the US, approximately 44% own a dog and 35% own a cat. About half of people with a pet learn about their pet and how to take care of them by word of mouth. 
              </Text>
              <br />
              <Text> 
                Our mission at MyloChat is to spread awareness about animals that are endangered, abused, neglected, or otherwise without homes. 
              </Text>
              <br />
              <Text>
                As a new FREE-to-use chat service, <strong>MyloChat</strong> currently is funded entirely by your donations. However, we take our mission and the importance of animal life seriously, and commit to giving away 100% of all excess donations to animal conservation and protection organizations, such as
                <em> The Humane Society of the United States</em> <Link color="#B59410" href='https://www.humanesociety.org/'> (HSUS) </Link> or <em> The American Society for the Prevention of Cruelty to Animals </em><Link color="#B59410" href='https://www.aspca.org/'> (ASPCA) </Link>.
              </Text>
              <br />
              <Text>
                Through mass communication and invested effort, we CAN make a difference. Make a donation, tell others you know, or get involved with businesses and organizations that are actively making an impact. With your help, we can emphasize the importance of animals and the value they bring to our world. 
              </Text>
              <br />
              <Text>
                Will you help us tell the world about the value of animals? Will you help us take care of animals like Mylo?
              </Text>
            </VStack>
          </div>
        </Box> */}

        {/* -------------------------------------------------------- */}
        {/* ------------------------- Bios ------------------------- */}
        {/* -------------------------------------------------------- */}

        <Box
          bg="#d1c8c3"
          w="100%"
          p={4}
          m="20px 0 35px 0"
          borderRadius="lg"
          borderWidth="1px"
          textAlign="center"
        >
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={6}
          >
            {/* ------------------- Stephanie Cambria ------------------ */}

            <GridItem
              bg="white"
              p="4"
              borderRadius="lg"
              borderWidth="1px"
              textAlign="center"
            >
              <Image
                borderRadius="full"
                position="relative"
                top="3"
                bottom="3"
                left="8"
                mb={7}
                boxSize="150px"
                mr={14}
                src={require("../image/Stephanie.png")}
                alt="Stephanie Cambria's bio picture"
              />

              <Heading size="md">Stephanie Cambria</Heading>

              <Text className="title" color="#B59410">
                Back-End Developer
              </Text>
              <Center justify="space-between" direction="row" align="center">
                <ButtonGroup variant="ghost">
                  <IconButton
                    as="a"
                    href="https://github.com/StephCambria"
                    aria-label="GitHub"
                    icon={<FaGithub fontSize="1.6rem" />}
                  />
                </ButtonGroup>
              </Center>
            </GridItem>

            {/* ------------------- Caleb Lacson ------------------ */}

            <GridItem
              bg="white"
              p="4"
              borderRadius="lg"
              borderWidth="1px"
              textAlign="center"
            >
              <Image
                borderRadius="full"
                position="relative"
                top="3"
                bottom="3"
                left="8"
                mb={7}
                boxSize="150px"
                mr={14}
                src={require("../image/Caleb.png")}
                alt="Caleb Lacson's bio picture"
              />
              <Heading size="md">Caleb Lacson</Heading>

              <Text className="title" color="#B59410">
                Front-End Developer
              </Text>
              <Center justify="space-between" direction="row" align="center">
                <ButtonGroup variant="ghost">
                  <IconButton
                    as="a"
                    href="https://github.com/clacson95"
                    aria-label="GitHub"
                    icon={<FaGithub fontSize="1.6rem" />}
                  />
                </ButtonGroup>
              </Center>
            </GridItem>

            {/* -------------------- Tyler Porter ------------------- */}

            <GridItem
              bg="white"
              p="4"
              borderRadius="lg"
              borderWidth="1px"
              textAlign="center"
            >
              <Image
                borderRadius="full"
                position="relative"
                top="3"
                bottom="3"
                left="8"
                mb={7}
                boxSize="150px"
                mr={14}
                src={require("../image/Tyler.png")}
                objectFit="cover"
                alt="Tyler Porter's bio picture"
              />
              <Heading size="md">Tyler Porter</Heading>

              <Text className="title" color="#B59410">
                Back-End Developer
              </Text>
              <Center justify="space-between" direction="row" align="center">
                <ButtonGroup variant="ghost">
                  <IconButton
                    as="a"
                    href="https://github.com/Mykneeisonfire"
                    aria-label="GitHub"
                    icon={<FaGithub fontSize="1.6rem" />}
                  />
                </ButtonGroup>
              </Center>
            </GridItem>

            {/* ------------------- Joyce Chen ------------------ */}

            <GridItem
              bg="white"
              p="4"
              borderRadius="lg"
              borderWidth="1px"
              textAlign="center"
            >
              <Image
                borderRadius="full"
                position="relative"
                top="3"
                bottom="3"
                left="8"
                mb={7}
                boxSize="150px"
                mr={14}
                src={require("../image/Joyce.png")}
                objectFit="cover"
                alt="Joyce Chen's bio picture"
              />
              <Heading size="md">Joyce Chen</Heading>

              <Text className="title" color="#B59410">
                Front-End Developer
              </Text>
              <Center justify="space-between" direction="row" align="center">
                <ButtonGroup variant="ghost">
                  <IconButton
                    as="a"
                    href="https://github.com/Joyce750526"
                    aria-label="GitHub"
                    icon={<FaGithub fontSize="1.6rem" />}
                  />
                </ButtonGroup>
              </Center>
            </GridItem>
          </Grid>
        </Box>

        {/* -------------------------------------------------------- */}
        {/* ---------------------- Our Mission -------------------- */}
        {/* -------------------------------------------------------- */}
        {/* Bottom */}
        <Box
          bg="#474e5d"
          w="100%"
          p="15px 0 5px 0"
          m="0px 0 35px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <div className="about-section" align="left">
            <h1>
              <strong>Our Mission</strong>
            </h1>
            <br />
            <VStack>
              <Text>
                Whether they are cuddly companions that we keep in our homes, or
                majestic wildlife that we view from afar, animals are valuable
                participants of our world. They bring us comfort, teach us about
                compassion, selflessness, and beauty, and are essential
                components in this worldwide ecosystem we call Earth.
              </Text>
              <br />
              <Text>
                Despite this, pets and wildlife are in danger around the world.
                Over 16,000 animal species are endangered with extinction. Every
                year, about 115 million animals are used in laboratory testing,
                and in the US alone, at least 10 million animals die from abuse
                and 1.5 million animals at animal shelters are euthanized.
              </Text>
              <br />
              <Text>
                But there is good news. Out of all households in the US,
                approximately 44% own a dog and 35% own a cat. About half of
                people with a pet learn about their pet and how to take care of
                them by word of mouth.
              </Text>
              <br />
              <Text>
                Our mission at MyloChat is to spread awareness about animals
                that are endangered, abused, neglected, or otherwise without
                homes.
              </Text>
              <br />
              <Text>
                As a new FREE-to-use chat service, <strong>MyloChat</strong>{" "}
                currently is funded entirely by your donations. However, we take
                our mission and the importance of animal life seriously, and
                commit to giving away 100% of all excess donations to animal
                conservation and protection organizations, such as
                <em> The Humane Society of the United States</em>{" "}
                <Link color="#B59410" href="https://www.humanesociety.org/">
                  {" "}
                  (HSUS){" "}
                </Link>{" "}
                or{" "}
                <em>
                  {" "}
                  The American Society for the Prevention of Cruelty to Animals{" "}
                </em>
                <Link color="#B59410" href="https://www.aspca.org/">
                  {" "}
                  (ASPCA){" "}
                </Link>
                .
              </Text>
              <br />
              <Text>
                Through mass communication and invested effort, we CAN make a
                difference. Make a donation, tell others you know, or get
                involved with businesses and organizations that are actively
                making an impact. With your help, we can emphasize the
                importance of animals and the value they bring to our world.
              </Text>
              <br />
              <Text>
                Will you help us tell the world about the value of animals? Will
                you help us take care of animals like Mylo?
              </Text>
            </VStack>
          </div>
        </Box>
      </Container>

      <Box>
        <Footer />
      </Box>
    </div>
  );
};

export default About;
