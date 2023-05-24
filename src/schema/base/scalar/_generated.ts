import type * as Types from "../../_generated";
export namespace BaseModule {
  export type Scalars = Pick<Types.Scalars, 'EmailAddress'>;
  export type EmailAddressScalarConfig = Types.EmailAddressScalarConfig;

  export interface Resolvers {
    EmailAddress?: Types.Resolvers['EmailAddress'];
  };
}
