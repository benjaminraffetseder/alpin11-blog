"use client";

import BlogCard from "@/components/ui/BlogCard";
import { Icons } from "@/components/ui/icons";
import {
  DeletePostDocument,
  DeletePostMutation,
  DeletePostMutationVariables,
  Post,
  UpdatePostDocument,
  UpdatePostInput,
  UpdatePostMutation,
  UpdatePostMutationVariables,
} from "@/generated/graphql";
import { truncate } from "@/utils/truncate";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Heading,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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

interface PostDetailProps {
  id: Post["id"];
  title: Post["title"];
  body: Post["body"];
}

const schema = z.object({
  title: z.string().nonempty(),
  body: z.string().nonempty(),
});

const PostDetail: FC<PostDetailProps> = ({ id, title, body }) => {
  const toast = useToast();
  const router = useRouter();

  const [isDeleteDisabled, setIsDeleteDisabled] = useState(false);
  const [isEditDisabled, setIsEditDisabled] = useState(false);

  const {
    isOpen: isDeletePostModalOpen,
    onOpen: onDeleteModalOpen,
    onClose: onDeleteModalClose,
  } = useDisclosure();

  const {
    isOpen: isEditPostModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdatePostInput>({
    resolver: zodResolver(schema),
  });

  const { mutate: deletePost } = useMutation<
    DeletePostMutation,
    Error,
    DeletePostMutationVariables
  >(
    (variables) =>
      request<DeletePostMutation>(
        process.env.NEXT_API!,
        DeletePostDocument,
        variables
      ),
    {
      onSuccess: () => {
        toast({
          title: "Post deleted.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onDeleteModalClose();
        setIsDeleteDisabled(false);
        router.push("/");
      },
      onError: (error) => {
        toast({
          title: "An error occurred.",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setIsDeleteDisabled(false);
      },
    }
  );

  const { mutate: updatePost } = useMutation<
    UpdatePostMutation,
    Error,
    UpdatePostMutationVariables
  >({
    mutationFn: (variables) => {
      return request(process.env.NEXT_API!, UpdatePostDocument, {
        id: variables.id,
        title: variables.title,
        body: variables.body,
      });
    },
    onSuccess: () => {
      toast({
        title: "Post updated.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onEditModalClose();
      setIsEditDisabled(false);
      router.push("/");
      reset();
    },
    onError: (error) => {
      toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setIsEditDisabled(false);
    },
  });

  const handleDelete = () => {
    setIsDeleteDisabled(true);
    deletePost({ id: id! });
  };

  const onSubmit: SubmitHandler<UpdatePostInput> = (data) => {
    setIsEditDisabled(true);
    updatePost({
      id: id!,
      title: data.title!,
      body: data.body!,
    });
  };

  return (
    <BlogCard>
      <Box position="relative">
        <Heading as="h3" fontSize="lg">
          {title}
        </Heading>
        {body && (
          <Text fontSize="sm" my={2} color="black.500">
            {truncate(body)}
          </Text>
        )}
        <Link
          href={`/blog/${id}`}
          variant="button"
          pr={2}
          pl={3}
          py={1.5}
          fontSize="xs"
          display="inline-flex"
          alignItems="center"
          gap={1}
        >
          <Text>Read more</Text>
          <Icon as={Icons.arrowRight} boxSize={4} />
        </Link>

        <Menu size="sm">
          <MenuButton
            as={Button}
            variant="unstyled"
            color="black.50"
            bg="transparent"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            position="absolute"
            bottom={-8}
            right={-8}
          >
            <Icon as={Icons.more} boxSize={4} />
          </MenuButton>
          <MenuList bg="black.800" border="none">
            <MenuItem
              bg="black.800"
              _focus={{
                bg: "brand.500",
              }}
              onClick={onEditModalOpen}
            >
              Edit Post
            </MenuItem>
            <MenuItem
              bg="black.800"
              _focus={{
                bg: "brand.500",
              }}
              onClick={onDeleteModalOpen}
            >
              Delete Post
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Modal isOpen={isDeletePostModalOpen} onClose={onDeleteModalClose}>
        <ModalOverlay />
        <ModalContent bg="black.900">
          <ModalHeader>Delete Article: {title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to delete this article?</Text>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onDeleteModalClose} size="sm">
              No
            </Button>

            <Button
              size="sm"
              colorScheme="red"
              ml={3}
              onClick={handleDelete}
              isDisabled={isDeleteDisabled}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isEditPostModalOpen}
        onClose={() => {
          onEditModalClose();
          reset();
        }}
      >
        <ModalOverlay />
        <ModalContent bg="black.900">
          <ModalHeader>Edit Article</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Input
                mb={2}
                placeholder="Title"
                defaultValue={title!}
                type="text"
                {...register("title")}
              />
              {errors.title && (
                <Text color="red.500">{errors.title.message}</Text>
              )}
              <Textarea
                mt={3}
                placeholder="Body"
                defaultValue={body!}
                {...register("body")}
              />
              {errors.body && (
                <Text color="red.500">{errors.body.message}</Text>
              )}
            </ModalBody>

            <ModalFooter>
              <Button
                onClick={() => {
                  onEditModalClose();
                  reset();
                }}
                size="sm"
                type="button"
              >
                Cancel
              </Button>

              <Button
                size="sm"
                colorScheme="brand"
                ml={3}
                isDisabled={isEditDisabled}
                type="submit"
              >
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </BlogCard>
  );
};

export default PostDetail;
