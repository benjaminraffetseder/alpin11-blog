import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();
const config: CodegenConfig = {
  schema: process.env.NEXT_API,
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        rawRequest: true,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};
export default config;
