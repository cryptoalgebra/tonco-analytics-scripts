import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    generates: {
        // Tonco API
        "src/graphql/generated/tonco.ts": {
            schema: "https://indexer.tonco.io/",
            documents: "src/graphql/queries/tonco/*.ts",
            plugins: ["typescript", "typescript-operations"],
        },
    },
};

export default config;
