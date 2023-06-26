import { Container, Heading, Link } from "@/components/client/chakra-ui";

const NotFoundPage = () => {
  return (
    <Container textAlign="center">
      <Heading mb={5} fontSize="5xl">
        404 - Page not found.
      </Heading>
      <Link variant="button" href="/">
        Go back home
      </Link>
    </Container>
  );
};

export default NotFoundPage;
