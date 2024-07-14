const gql = require('graphql-tag');

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]
  }
  type Track {
    id: ID!
    title: String!
    author: Author!
    thubail: String
    length: Int
    modeuleCount: Int
  }
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
