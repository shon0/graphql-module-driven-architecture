import { EmailAddressTypeDefinition, EmailAddressResolver } from 'graphql-scalars'
import type { BaseModule } from '../_generated'

export const typeDefs = [EmailAddressTypeDefinition]

export const resolvers: BaseModule.Resolvers = {
  EmailAddress: EmailAddressResolver,
}
