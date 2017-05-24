import { pubsub } from './subscriptions';

const messages = [{
  id: 1,
  text: 'hi, i am apple',
  user: 'apple'
}, {
  id: 2,
  text: 'hi apple, i am ball',
  user: 'ball'
}];
let nextId = 3;
export const resolvers = {
  Query: {
    messages: () => {
      return messages;
    },
    message: (root, args) => {
      return messages.find(i => i.id === args.id);
    }
  },
  Mutation: {
    addMessage: (root, args) => {
      const newMessage = { id: nextId++, text: args.text, user: args.user };
      messages.push(newMessage);
      pubsub.publish('newMessage', newMessage);
      return newMessage;
    },
  },
  Subscription: {
    newMessage : (message) => {
      return message;
    }
  }
};