import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';
import { resolvers } from './resolvers';


const typeDefs = `
  type Message {
    id: ID!
    text: String
    user: String
  },
  type Query {
    messages: [Message], 
    message(id: Int!): Message  
  }
  # The mutation root type, used to define all mutations.
  type Mutation {
    # A mutation to add a new channel to the list of channels
    addMessage(text: String!, user: String): Message
  },
  type Subscription {
      newMessage: Message
  }
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;
const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
