import type { UserModule } from './_generated'

export const resolvers: UserModule.Resolvers = {
  Query: {
    users() {
      return [
        {
          id: '1',
          name: 'John Doe',
          email: 'john.doe@example.com',
          posts: [],
        },
      ]
    },
    user(_, { id }) {
      return {
        id,
        name: 'John Doe',
        email: 'john.doe@example.com',
        posts: [],
      }
    },
  },
  Mutation: {
    createUser(_, { input }) {
      return { id: '1', ...input, posts: [] }
    },
  },
  User: {
    posts(parent) {
      return [
        {
          id: '1',
          author: parent,
          title: 'Hello world!',
          content: 'Hello world!',
          published: true,
        },
      ]
    },
  },
}
