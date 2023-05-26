/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* eslint-disable */

import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
import type { Post as PostModel, User as UserModel } from '@prisma/client/index.d'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  EmailAddress: string
}

export type CreatePostInput = {
  readonly content: Scalars['String']
  readonly published: InputMaybe<Scalars['Boolean']>
  readonly title: Scalars['String']
  readonly userId: Scalars['ID']
}

export type CreatePostPayload = {
  readonly __typename?: 'CreatePostPayload'
  readonly post: Post
}

export type CreateUserInput = {
  readonly email: Scalars['String']
  readonly name: InputMaybe<Scalars['String']>
}

export type CreateUserPayload = {
  readonly __typename?: 'CreateUserPayload'
  readonly user: User
}

export type Mutation = {
  readonly __typename?: 'Mutation'
  readonly createPost: CreatePostPayload
  readonly createUser: CreateUserPayload
  readonly updatePost: UpdatePostPayload
}

export type MutationCreatePostArgs = {
  input: CreatePostInput
}

export type MutationCreateUserArgs = {
  input: CreateUserInput
}

export type MutationUpdatePostArgs = {
  input: UpdatePostInput
}

export type Post = {
  readonly __typename?: 'Post'
  readonly author: User
  readonly content: Scalars['String']
  readonly id: Scalars['ID']
  readonly published: Scalars['Boolean']
  readonly title: Scalars['String']
}

export type Query = {
  readonly __typename?: 'Query'
  readonly post: Maybe<Post>
  readonly posts: ReadonlyArray<Post>
  readonly user: Maybe<User>
  readonly users: ReadonlyArray<User>
}

export type QueryPostArgs = {
  id: Scalars['ID']
}

export type QueryUserArgs = {
  id: Scalars['ID']
}

export type UpdatePostInput = {
  readonly content: InputMaybe<Scalars['String']>
  readonly postId: Scalars['ID']
  readonly published: InputMaybe<Scalars['Boolean']>
  readonly title: InputMaybe<Scalars['String']>
}

export type UpdatePostPayload = {
  readonly __typename?: 'UpdatePostPayload'
  readonly post: Post
}

export type User = {
  readonly __typename?: 'User'
  readonly email: Scalars['EmailAddress']
  readonly id: Scalars['ID']
  readonly name: Maybe<Scalars['String']>
  readonly posts: ReadonlyArray<Post>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  CreatePostInput: CreatePostInput
  CreatePostPayload: ResolverTypeWrapper<
    Omit<CreatePostPayload, 'post'> & { post: ResolversTypes['Post'] }
  >
  CreateUserInput: CreateUserInput
  CreateUserPayload: ResolverTypeWrapper<
    Omit<CreateUserPayload, 'user'> & { user: ResolversTypes['User'] }
  >
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Mutation: ResolverTypeWrapper<{}>
  Post: ResolverTypeWrapper<PostModel>
  Query: ResolverTypeWrapper<{}>
  String: ResolverTypeWrapper<Scalars['String']>
  UpdatePostInput: UpdatePostInput
  UpdatePostPayload: ResolverTypeWrapper<
    Omit<UpdatePostPayload, 'post'> & { post: ResolversTypes['Post'] }
  >
  User: ResolverTypeWrapper<UserModel>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']
  CreatePostInput: CreatePostInput
  CreatePostPayload: Omit<CreatePostPayload, 'post'> & { post: ResolversParentTypes['Post'] }
  CreateUserInput: CreateUserInput
  CreateUserPayload: Omit<CreateUserPayload, 'user'> & { user: ResolversParentTypes['User'] }
  EmailAddress: Scalars['EmailAddress']
  ID: Scalars['ID']
  Mutation: {}
  Post: PostModel
  Query: {}
  String: Scalars['String']
  UpdatePostInput: UpdatePostInput
  UpdatePostPayload: Omit<UpdatePostPayload, 'post'> & { post: ResolversParentTypes['Post'] }
  User: UserModel
}

export type CreatePostPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreatePostPayload'] = ResolversParentTypes['CreatePostPayload'],
> = {
  post: Resolver<ResolversTypes['Post'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CreateUserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateUserPayload'] = ResolversParentTypes['CreateUserPayload'],
> = {
  user: Resolver<ResolversTypes['User'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface EmailAddressScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress'
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  createPost: Resolver<
    ResolversTypes['CreatePostPayload'],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePostArgs, 'input'>
  >
  createUser: Resolver<
    ResolversTypes['CreateUserPayload'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'input'>
  >
  updatePost: Resolver<
    ResolversTypes['UpdatePostPayload'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePostArgs, 'input'>
  >
}

export type PostResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post'],
> = {
  author: Resolver<ResolversTypes['User'], ParentType, ContextType>
  content: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  published: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  post: Resolver<
    Maybe<ResolversTypes['Post']>,
    ParentType,
    ContextType,
    RequireFields<QueryPostArgs, 'id'>
  >
  posts: Resolver<ReadonlyArray<ResolversTypes['Post']>, ParentType, ContextType>
  user: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, 'id'>
  >
  users: Resolver<ReadonlyArray<ResolversTypes['User']>, ParentType, ContextType>
}

export type UpdatePostPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdatePostPayload'] = ResolversParentTypes['UpdatePostPayload'],
> = {
  post: Resolver<ResolversTypes['Post'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  email: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  posts: Resolver<ReadonlyArray<ResolversTypes['Post']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
  CreatePostPayload: CreatePostPayloadResolvers<ContextType>
  CreateUserPayload: CreateUserPayloadResolvers<ContextType>
  EmailAddress: GraphQLScalarType
  Mutation: MutationResolvers<ContextType>
  Post: PostResolvers<ContextType>
  Query: QueryResolvers<ContextType>
  UpdatePostPayload: UpdatePostPayloadResolvers<ContextType>
  User: UserResolvers<ContextType>
}

export type EmailAddress = Scalars['EmailAddress']
