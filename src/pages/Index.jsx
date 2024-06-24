import { Container, Text, VStack, Heading, Box, Image, Flex, Link, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={5}>
          <Heading as="h1" size="2xl">Financial News Today</Heading>
          <Text fontSize="lg" color="gray.500">Your daily dose of financial news and insights</Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg" mb={4}>Top Stories</Heading>
          <Flex direction={{ base: "column", md: "row" }} spacing={4}>
            <Box flex="1" mb={{ base: 4, md: 0 }} mr={{ md: 4 }}>
              <Image src="/images/top-story-1.jpg" alt="Top story 1" borderRadius="md" />
              <Heading as="h3" size="md" mt={2}>Market hits all-time high</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box flex="1" mb={{ base: 4, md: 0 }} mr={{ md: 4 }}>
              <Image src="/images/top-story-2.jpg" alt="Top story 2" borderRadius="md" />
              <Heading as="h3" size="md" mt={2}>Tech stocks rally</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box flex="1">
              <Image src="/images/top-story-3.jpg" alt="Top story 3" borderRadius="md" />
              <Heading as="h3" size="md" mt={2}>Oil prices soar</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </Flex>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg" mb={4}>Latest Articles</Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h3" size="md">Understanding the stock market</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Investment strategies for 2023</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">How to diversify your portfolio</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>

        <Divider />

        <Box textAlign="center" py={5}>
          <Text fontSize="lg" color="gray.500">Follow us on</Text>
          <Flex justify="center" mt={2}>
            <Link href="https://twitter.com" isExternal mx={2}>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://facebook.com" isExternal mx={2}>
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal mx={2}>
              <FaLinkedin size="24px" />
            </Link>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;