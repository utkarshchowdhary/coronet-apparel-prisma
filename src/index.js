import '@babel/polyfill';
import { PrismaClient } from '@prisma/client';
import { GraphQLServer } from 'graphql-yoga';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';

const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
  },
  context: {
    prisma,
  },
});

server.start({ port: process.env.PORT || 4000 }, ({ port }) => {
  console.log(
    `Graphql Server up, listening on port ${port} for incoming requests.`
  );
});
