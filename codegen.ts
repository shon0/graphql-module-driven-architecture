import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'src/schema/**/*.graphql',
  generates: {
    'src/schema.graphql': {
      plugins: ['schema-ast'],
    },
    'src/schema/': {
      preset: 'graphql-modules',
      presetConfig: {
        baseTypesPath: '_generated.ts',
        filename: '_generated.ts',
        useGraphQLModules: false,
      },
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        useTypeImports: true,
      },
    },
  },
}

export default config
