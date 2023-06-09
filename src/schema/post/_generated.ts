/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* eslint-disable */

import type * as Types from '../_generated'
export namespace PostModule {
  interface DefinedFields {
    Post: 'id' | 'title' | 'content' | 'published' | 'author'
    Query: 'posts' | 'post'
    CreatePostPayload: 'post'
    UpdatePostPayload: 'post'
    Mutation: 'createPost' | 'updatePost'
  }

  interface DefinedInputFields {
    CreatePostInput: 'userId' | 'title' | 'content' | 'published'
    UpdatePostInput: 'postId' | 'title' | 'content' | 'published'
  }

  export type Post = Pick<Types.Post, DefinedFields['Post']>
  export type User = Types.User
  export type Query = Pick<Types.Query, DefinedFields['Query']>
  export type CreatePostInput = Pick<Types.CreatePostInput, DefinedInputFields['CreatePostInput']>
  export type UpdatePostInput = Pick<Types.UpdatePostInput, DefinedInputFields['UpdatePostInput']>
  export type CreatePostPayload = Pick<Types.CreatePostPayload, DefinedFields['CreatePostPayload']>
  export type UpdatePostPayload = Pick<Types.UpdatePostPayload, DefinedFields['UpdatePostPayload']>
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>

  export type PostResolvers = Pick<Types.PostResolvers, DefinedFields['Post'] | '__isTypeOf'>
  export type QueryResolvers = Required<Pick<Types.QueryResolvers, DefinedFields['Query']>>
  export type CreatePostPayloadResolvers = Pick<
    Types.CreatePostPayloadResolvers,
    DefinedFields['CreatePostPayload'] | '__isTypeOf'
  >
  export type UpdatePostPayloadResolvers = Pick<
    Types.UpdatePostPayloadResolvers,
    DefinedFields['UpdatePostPayload'] | '__isTypeOf'
  >
  export type MutationResolvers = Required<Pick<Types.MutationResolvers, DefinedFields['Mutation']>>

  export interface Resolvers {
    Post?: PostResolvers
    Query: QueryResolvers
    CreatePostPayload?: CreatePostPayloadResolvers
    UpdatePostPayload?: UpdatePostPayloadResolvers
    Mutation: MutationResolvers
  }
}
