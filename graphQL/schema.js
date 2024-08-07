export const typeDefs = `#graphql
  type Game {
        id: ID!
        title: String!
        platform: [String!]!
  }

  type Review {
        id: ID!
        rating: Int!
        content: String!
    }

  type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }

    type Query {

        Reviews: [Review]
        Games: [Game]
        Authors: [Author]
        
        # Query variables  :
        review_var(id: ID!): Review
        game_var(id: ID!): Game
        author_var(id: ID!): Author
    }
`