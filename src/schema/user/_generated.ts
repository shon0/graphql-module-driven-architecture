/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* eslint-disable */

import type * as Types from '../_generated'
export namespace UserModule {
  interface DefinedFields {
    User: 'id' | 'name' | 'email' | 'posts'
    Query: 'users' | 'user'
    CreateUserPayload: 'user'
    Mutation: 'createUser'
  }

  interface DefinedInputFields {
    CreateUserInput: 'name' | 'email'
  }

  export type User = Pick<Types.User, DefinedFields['User']>
  export type EmailAddress = Types.EmailAddress
  export type Post = Types.Post
  export type Query = Pick<Types.Query, DefinedFields['Query']>
  export type CreateUserInput = Pick<Types.CreateUserInput, DefinedInputFields['CreateUserInput']>
  export type CreateUserPayload = Pick<Types.CreateUserPayload, DefinedFields['CreateUserPayload']>
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>

  export type UserResolvers = Pick<Types.UserResolvers, DefinedFields['User'] | '__isTypeOf'>
  export type QueryResolvers = Required<Pick<Types.QueryResolvers, DefinedFields['Query']>>
  export type CreateUserPayloadResolvers = Pick<
    Types.CreateUserPayloadResolvers,
    DefinedFields['CreateUserPayload'] | '__isTypeOf'
  >
  export type MutationResolvers = Required<Pick<Types.MutationResolvers, DefinedFields['Mutation']>>

  export interface Resolvers {
    User?: UserResolvers
    Query: QueryResolvers
    CreateUserPayload?: CreateUserPayloadResolvers
    Mutation: MutationResolvers
  }
}
