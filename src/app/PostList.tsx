"use client";

import BlogCard from "@/components/ui/BlogCard";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { Icons } from "@/components/ui/icons";
import { GetPostsDocument, GetPostsQuery } from "@/generated/graphql";
import { useGQL } from "@/hooks/useGQL";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import PostDetail from "./PostDetail";

const PostList = () => {
  const [page, setPage] = useState(1);

  const { isLoading, isError, isSuccess, data, isFetching, isPreviousData } =
    useGQL<GetPostsQuery>(
      ["Posts", page],
      GetPostsDocument,
      {
        options: {
          paginate: {
            limit: 5,
            page: page,
          },
        },
      },
      {
        refetchOnWindowFocus: false,
        keepPreviousData: true,
      }
    );

  const onNextPage = () => {
    if (!isPreviousData && data) {
      setPage((old) => old + 1);
    }
  };

  const onPreviousPage = () => {
    if (page > 1) {
      setPage((old) => old - 1);
    }
  };

  return (
    <>
      {isError && (
        <Flex my="50px" justifyContent="center" alignItems="center" gap={4}>
          <Icon as={Icons.sad} color="brand.500" boxSize={8} />
          <Text fontSize="xl">Yikes! Something went wrong there...</Text>
        </Flex>
      )}

      {isLoading && <LoadingSpinner />}

      {isSuccess && data && (
        <>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            spacing={10}
          >
            {data.posts?.data?.map((post, index) => (
              <Box
                key={post!.id}
                as={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.15 },
                }}
              >
                <PostDetail
                  id={post!.id}
                  title={post!.title}
                  body={post!.body}
                />
              </Box>
            ))}

            <Box
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 5 * 0.15 } }}
            >
              <BlogCard>
                <Heading as="h3" fontSize="lg">
                  You need help with your ecommerce store?
                </Heading>

                <Text fontSize="sm" my={2} color="black.500">
                  Alpin11 is your digital partner for all things ecommerce!
                </Text>

                <Link
                  href="https://alpin11.com/"
                  target="_blank"
                  variant="button"
                  pr={2}
                  pl={3}
                  py={1.5}
                  fontSize="xs"
                  display="inline-flex"
                  alignItems="center"
                  gap={1}
                >
                  <Text>Take a look!</Text>
                  <Icon as={Icons.arrowRight} boxSize={4} />
                </Link>
              </BlogCard>
            </Box>
          </SimpleGrid>

          {isFetching && !isLoading && isPreviousData && (
            <LoadingSpinner text="Loading more posts..." />
          )}

          <Box display="flex" justifyContent="space-between" mt={5}>
            <Text fontSize="sm">
              Page {page} of {data.posts?.meta?.totalCount! / 10}
            </Text>

            <Flex justifyContent="center" alignItems="center" gap={4}>
              {page > 1 && (
                <Button
                  onClick={onPreviousPage}
                  disabled={page === 1}
                  variant="outline"
                  colorScheme="black.50"
                  bg="black.900"
                  border="none"
                >
                  <Icon as={Icons.arrowLeft} boxSize={4} />
                  <Text srOnly>Previous page</Text>
                </Button>
              )}

              {!(data.posts?.meta?.totalCount! / 10 === page) && (
                <Button
                  onClick={onNextPage}
                  disabled={isPreviousData}
                  variant="outline"
                  colorScheme="black.50"
                  bg="black.900"
                  border="none"
                >
                  <Icon as={Icons.arrowRight} boxSize={4} />
                  <Text srOnly>Next page</Text>
                </Button>
              )}
            </Flex>
          </Box>
        </>
      )}
    </>
  );
};

export default PostList;
