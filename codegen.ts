import type { CodegenConfig } from '@graphql-codegen/cli'
import fs from 'fs'

// ファイルを読み込み、指定された正規表現を使用してObjectTypeまたはモデル名を抽出
const extractData = (filename: string, regex: RegExp) => {
  const data = fs.readFileSync(filename, 'utf-8')
  return Array.from(data.matchAll(regex)).map((m) => m[1] ?? '')
}

// graphqlの型とprismaの型からマッパーを作成
const generatePrismaTypeMappers = () => {
  const graphqlTypes = extractData('src/schema.graphql', /type (\w+) ?\{/g)
  const prismaTypes = extractData('prisma/schema.prisma', /model (\w+) ?\{/g)

  return Object.fromEntries(
    graphqlTypes
      .filter((t) => prismaTypes.includes(t))
      .map((model) => [model, `@prisma/client/index.d#${model}`])
  )
}

const ADD_CONTENT = `/*
* -------------------------------------------------------
* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
* -------------------------------------------------------
*/

/* eslint-disable */
`

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
        requireRootResolvers: true,
        useGraphQLModules: false,
      },
      plugins: [
        {
          add: {
            content: ADD_CONTENT,
          },
        },
        'typescript',
        'typescript-resolvers',
      ],
      config: {
        useTypeImports: true,
        immutableTypes: true,
        strictScalars: true,
        enumsAsConst: true,
        avoidOptionals: true,
        scalars: {
          EmailAddress: 'string',
        },
        mapperTypeSuffix: 'Model',
        mappers: generatePrismaTypeMappers(),
      },
    },
  },
}

export default config
