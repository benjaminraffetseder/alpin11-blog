"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

// Workaround for Next.js 13 appdir
// https://beta.nextjs.org/docs/rendering/server-and-client-components#third-party-packages
export { Box, Container, Heading, Link, Text };
