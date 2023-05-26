import { prisma } from '~/lib/prisma'
import type { PostModule } from './_generated'

export const resolvers: PostModule.Resolvers = {
  Query: {
    posts: () => {
      return prisma.post.findMany()
    },
    post: (_, { id }) => {
      return prisma.post.findUnique({ where: { id } })
    },
  },
  Mutation: {
    createPost: (_, { input: { title, content, userId } }) => {
      return prisma.post.create({
        data: {
          title,
          content,
          authorId: userId,
        },
      })
    },
    updatePost: (_, { input: { postId, title, content } }) => {
      return prisma.post.update({
        where: { id: postId },
        data: {
          title: title ?? undefined,
          content: content ?? undefined,
        },
      })
    },
  },
  Post: {
    id: parent => parent.id,
    title: parent => parent.title,
    content: parent => parent.content,
    published: parent => parent.published,
    author: parent => {
      return prisma.post.findUniqueOrThrow({ where: { id: parent.id } }).author()
    },
  },
}
