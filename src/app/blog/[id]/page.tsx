"use client";

import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { Icons } from "@/components/ui/icons";
import {
  DeletePostDocument,
  DeletePostMutation,
  DeletePostMutationVariables,
  GetPostDocument,
  GetPostQuery,
  UpdatePostDocument,
  UpdatePostInput,
  UpdatePostMutation,
  UpdatePostMutationVariables,
} from "@/generated/graphql";
import { useGQL } from "@/hooks/useGQL";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import request from "graphql-request";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  params: {
    id: string;
  };
}

const schema = z.object({
  title: z.string().nonempty(),
  body: z.string().nonempty(),
});

const BlogDetail: FC<Props> = ({ params }) => {
  const { id } = params;
  const toast = useToast();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditMode, setIsEditMode] = useState(false);

  const { data, isFetching, isError, refetch } = useGQL<GetPostQuery>(
    ["Post", id],
    GetPostDocument,
    { id },
    { refetchOnWindowFocus: false }
  );

  const { mutate: updatePost } = useMutation<
    UpdatePostMutation,
    Error,
    UpdatePostMutationVariables
  >({
    mutationFn: (variables) =>
      request(process.env.NEXT_API!, UpdatePostDocument, {
        id: variables.id,
        title: variables.title,
        body: variables.body,
      }),
    onSuccess: () => {
      setIsEditMode(false);
      refetch();
      toast({
        title: "Article updated.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    onError: (error) => {
      console.log(error);
      toast({
        title: "Something went wrong.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const { mutate: deletePost } = useMutation<
    DeletePostMutation,
    Error,
    DeletePostMutationVariables
  >({
    mutationFn: (variables) => {
      return request(process.env.NEXT_API!, DeletePostDocument, {
        id: variables.id,
      });
    },
    onSuccess: () => {
      refetch();
      reset();
      toast({
        title: "Article was deleted.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    onError: (error) => {
      console.log(error);
      toast({
        title: "Something went wrong.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdatePostInput>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<UpdatePostInput> = (data) => {
    const { title, body } = data;
    updatePost({
      id: id,
      title: title!,
      body: body!,
    });
  };

  const onDeletePost = () => {
    deletePost({
      id: id,
    });
    onClose();
    router.push("/");
  };

  if (isFetching) {
    return (
      <Container>
        <LoadingSpinner text="Loading article..." />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container
        height="full"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        flex={1}
        textAlign="center"
      >
        <Heading
          as="h1"
          fontSize={{
            base: "2xl",
            md: "5xl",
          }}
          mt="-100px"
          mb={5}
        >
          Article not found.
        </Heading>
        <Link variant="button" w="fit-content" href="/blog">
          Go back
        </Link>
      </Container>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxW="65ch">
          <Flex justifyContent="space-between">
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              <Link
                href="/blog"
                h={10}
                w={10}
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="full"
                bg="black.800"
                color="white"
              >
                <Icon as={Icons.arrowLeft} />
                <Text srOnly>Back to blog</Text>
              </Link>

              <Text color="black.500">{data?.post?.user?.name!}</Text>
            </Box>

            <Box display="flex" alignItems="center" gap={2}>
              <Button
                h={10}
                w={10}
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="full"
                bg="black.800"
                color="white"
                onClick={() => {
                  setIsEditMode(!isEditMode);
                  reset();
                }}
              >
                <Icon as={Icons.edit} />
                <Text srOnly>Edit article</Text>
              </Button>

              <Button
                h={10}
                w={10}
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="full"
                bg="black.800"
                color="white"
                onClick={onOpen}
              >
                <Icon as={Icons.trash} />
                <Text srOnly>Delete article</Text>
              </Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="black.900">
                  <ModalHeader>Delete Article</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>Are you sure you want to delete this article?</Text>
                  </ModalBody>

                  <ModalFooter>
                    <Button onClick={onClose} size="sm">
                      No
                    </Button>

                    <Button
                      size="sm"
                      colorScheme="red"
                      ml={3}
                      onClick={onDeletePost}
                    >
                      Yes
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Flex>

          {!isEditMode && (
            <Heading
              as="h1"
              fontSize={{
                base: "2xl",
                md: "5xl",
              }}
              mb={{
                base: 5,
                md: 10,
              }}
            >
              {data?.post?.title!}
            </Heading>
          )}

          {isEditMode && (
            <Box
              mb={{
                base: 5,
                md: 10,
              }}
            >
              <Textarea
                fontSize={{
                  base: "2xl",
                  md: "5xl",
                }}
                fontWeight="bold"
                rows={3}
                defaultValue={data?.post?.title!}
                {...register("title")}
              />
              <Text mt={2} color="red.500">
                {errors.title?.message}
              </Text>
            </Box>
          )}

          {!isEditMode && <Text>{data?.post?.body!}</Text>}

          {isEditMode && (
            <>
              <Textarea
                rows={10}
                defaultValue={data?.post?.body!}
                {...register("body")}
              />
              <Text mt={2} color="red.500">
                {errors.body?.message}
              </Text>
            </>
          )}

          {isEditMode && (
            <Button mt={5} type="submit">
              Save
            </Button>
          )}
        </Container>
      </form>
    </>
  );
};

export default BlogDetail;
