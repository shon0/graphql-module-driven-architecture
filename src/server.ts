import { createServer } from 'node:http'
import { createSchema, createYoga } from 'graphql-yoga'
import { loadFiles } from '@graphql-tools/load-files'

const schema = createSchema({
  typeDefs: await loadFiles('src/schema.graphql'),
  resolvers: await loadFiles('src/schema/**/resolver.ts'),
})

const yoga = createYoga({ schema })

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const server = createServer(yoga)

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})
