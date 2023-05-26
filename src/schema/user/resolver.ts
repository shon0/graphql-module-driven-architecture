import { prisma } from '~/lib/prisma'
import type { UserModule } from './_generated'

export const resolvers: UserModule.Resolvers = {
  Query: {
    users: () => {
      return prisma.user.findMany()
    },
    user: (_, { id }) => {
      return prisma.user.findUnique({ where: { id } })
    },
  },
  Mutation: {
    createUser: (_, { input }) => {
      return { user: prisma.user.create({ data: input }) }
    },
  },
  User: {
    id: parent => parent.id,
    name: parent => parent.name,
    email: parent => parent.email,
    posts: parent => {
      return prisma.user.findUniqueOrThrow({ where: { id: parent.id } }).posts()
    },
  },
}
