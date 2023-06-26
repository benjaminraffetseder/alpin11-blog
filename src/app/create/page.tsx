"use client";
import { CreatePostDocument, CreatePostInput } from "@/generated/graphql";
import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { request } from "graphql-request";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1).max(255),
  body: z.string().min(1).max(255),
});

const CreatePage = () => {
  const router = useRouter();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      body: "",
    },
  });

  const { mutate } = useMutation<CreatePostInput, Error, CreatePostInput>({
    mutationFn: (variables) =>
      request(process.env.NEXT_API!, CreatePostDocument, variables),
    onSuccess: async () => {
      toast({
        title: "Post was created!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.push("/");
    },
    onError: (error) => {
      toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.log(error);
    },
  });

  const onSubmit: SubmitHandler<CreatePostInput> = (data) => {
    const { title, body } = data;
    mutate({ title, body });
  };

  return (
    <Container>
      <Heading mb={5}>Create Post</Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <Input placeholder="Title" {...register("title")} />
          <Text color="red.500">{errors.title?.message}</Text>
          <Textarea placeholder="Content" {...register("body")} />
          <Text color="red.500">{errors.body?.message}</Text>

          <Button type="submit">Submit</Button>
        </VStack>
      </form>
    </Container>
  );
};

export default CreatePage;
