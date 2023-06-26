import { Box, Container, Heading, Text } from "@/components/client/chakra-ui";
import BlogCard from "@/components/ui/BlogCard";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: "About ALPIN11",
};

const AboutPage = () => {
  return (
    <Container flex={1} alignItems="center" display="flex">
      <Box maxW="65ch" mx="auto">
        <BlogCard>
          <Heading as="h1" size="lg" mb={5}>
            High-end e-commerce solutions.
            <br />
            Made in Austria.
          </Heading>
          <Text>
            ALPIN11 has been committed to leading its customers to success since
            it was founded. Whether it&apos;s corporate websites, digital
            commerce platforms or master data management: ALPIN11 is always up
            to date in all areas and always thinks at least one step ahead in
            order to optimally meet the requirements of its customers.
          </Text>

          <Text
            mt={5}
            fontSize="sm"
            color="black.500"
            fontWeight="semibold"
            textTransform="uppercase"
          >
            <Text as="span" color="brand.500">
              ALPIN11
            </Text>{" "}
            &copy; {new Date().getFullYear()}
          </Text>
        </BlogCard>
      </Box>
    </Container>
  );
};

export default AboutPage;
