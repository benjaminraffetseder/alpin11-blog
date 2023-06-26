import { cardTheme } from "@/components/ui/BlogCard";
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      50: "#949FF9",
      100: "#7B88F8",
      200: "#6272F6",
      300: "#495BF5",
      400: "#3045F3",
      500: "#172ef2",
      600: "#0D23E2",
      700: "#0B1FC9",
      800: "#081797",
      900: "#07137D",
    },
    black: {
      50: "#f7f7f7",
      100: "#e3e3e3",
      200: "#c8c8c8",
      300: "#a4a4a4",
      400: "#818181",
      500: "#666666",
      600: "#515151",
      700: "#434343",
      800: "#212121",
      900: "#121212",
    },
  },
  fonts: {
    heading: "var(--font-inter)",
    body: "var(--font-inter)",
  },
  styles: {
    global: {
      body: {
        bg: "black.900",
        color: "black.50",
      },
    },
  },
  components: {
    Card: cardTheme,
    Container: {
      baseStyle: {
        maxW: "container.xl",
        px: 10,
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
        },
      },
      sizes: {
        sm: {
          fontSize: "sm",
        },
        md: {
          fontSize: "md",
        },
      },
      variants: {
        default: {
          color: "brand.500",
          _hover: {
            color: "brand.400",
          },
        },
        white: {
          color: "black.50",
          _hover: {
            color: "black.100",
          },
        },
      },
    },
  },
});

export default customTheme;
