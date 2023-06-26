import { Box, Container, Heading } from "@/components/client/chakra-ui";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import PostList from "./PostList";

export const metadata: Metadata = {
  title: `Home | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function Home() {
  const { description } = siteConfig;
  return (
    <main>
      <Box py={10}>
        <Container>
          <Box mb={10} maxW="65ch">
            <Heading size="xl" color="black.50">
              {description}
            </Heading>
          </Box>
          <PostList />
        </Container>
      </Box>
    </main>
  );
}
