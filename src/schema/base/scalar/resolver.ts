import {
  EmailAddressTypeDefinition,
  EmailAddressResolver,
} from 'graphql-scalars'

export const typeDefs = [EmailAddressTypeDefinition]

export const resolvers = {
  EmailAddress: EmailAddressResolver,
}
