"use client";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { FC } from "react";

interface LoadingSpinnerProps {
  text?: string;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ text }) => {
  return (
    <Flex my="50px" justifyContent="center" alignItems="center" gap={4}>
      <Spinner color="brand.500" />
      <Text fontSize="xl">{text || "Loading..."}</Text>
    </Flex>
  );
};

export default LoadingSpinner;
