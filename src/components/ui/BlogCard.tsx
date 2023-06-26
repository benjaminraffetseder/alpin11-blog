"use client";

import { Card, CardBody } from "@chakra-ui/react";
import { FC } from "react";

import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    backgroundColor: "black.900",
    color: "black.50",
    rounded: "21px",
    padding: "4",
    border: "1px solid var(--chakra-colors-black-800)",
  },
});

export const cardTheme = defineMultiStyleConfig({ baseStyle });

interface CardProps {
  children: React.ReactNode;
}

const BlogCard: FC<CardProps> = ({ children }) => {
  return (
    <Card>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default BlogCard;
