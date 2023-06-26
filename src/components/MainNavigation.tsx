"use client";

import { siteConfig } from "@/config/site";
import { Link } from "@chakra-ui/next-js";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC } from "react";
import { Icons } from "./ui/icons";

interface MainNavigationProps {}

const MainNavigation: FC<MainNavigationProps> = ({}) => {
  const { name, mainNav } = siteConfig;

  return (
    <Box
      as={motion.div}
      position="sticky"
      top={0}
      zIndex={100}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Box as="nav" bg="black.900" py={10} width="100%">
        <Container>
          <Flex w="full" justifyContent="space-between">
            <Link variant="white" href="/" fontWeight="semibold">
              <Flex alignItems="center" gap={2}>
                <Icons.logo size={18} />
                <Text color="brand">{name}</Text>
              </Flex>
            </Link>

            <Flex alignItems="center" gap={18}>
              {mainNav.map((nav) => (
                <Link variant="white" size="sm" key={nav.title} href={nav.href}>
                  {nav.title}
                </Link>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default MainNavigation;
