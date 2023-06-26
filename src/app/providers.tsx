"use client";

import customTheme from "@/config/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
        }
        ::selection {
          background-color: var(--chakra-colors-brand-500);
          color: var(--chakra-colors-black-50);
        }
      `}</style>

      <CacheProvider>
        <ChakraProvider theme={customTheme}>
          <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}
