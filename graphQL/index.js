import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { connectDB } from "./models/db.js";
import Reviews from "./models/review.js";
import Games from "./models/game.js";
import Authors from "./models/author.js";


connectDB();

const resolvers = {
  Query: {
    Reviews: async () => {
      return await Reviews.find();
    },
    Games: async () => {
      return await Games.find();
    },
    Authors: async () => {
      return await Authors.find();
    },
    // Query variable names : 
    review_var: async (_, { id }) => {
      return await Reviews.findById(id);
    },
    game_var: async (_, { id }) => {
      return await Games.findById(id);
    },
    author_var: async (_, { id }) => {
      return await Authors.findById(id);
  },
}};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const {url} = await startStandaloneServer(server, {
    listen: {port: 4000}
});


console.log(`Server ready at : ${url}`);