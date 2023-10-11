const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');

const app = express();

const typeDefs = gql`
  type Province {
    name: String!
    description: String
  }

  type Query {
    provinces: [Province]
  }
`;


const provinces = [
  { name: 'Harare', description: 'Harare is both the capital city and a province of Zimbabwe, serving as the political, economic, and cultural center of the country.' },
  { name: 'Bulawayo', description: 'Harare is both the capital city and a province of Zimbabwe, serving as the political, economic, and cultural center of the country.' },
  { name: 'Manicaland', description: 'Located in the east, Manicaland is characterized by its scenic beauty and includes the city of Mutare.' },
  { name: 'Mashonaland Central', description: 'Situated in the north, this province includes towns like Bindura and Mazowe.' },
  { name: 'Mashonaland East', description: 'In the northeast, this province features cities such as Marondera.' },
  { name: 'Mashonaland West', description: ' Found in the northwest, this province includes Chinhoyi among its towns.' },
  { name: 'Masvingo', description: 'Located in the south, Masvingo is known for its historical sites, including the famous Great Zimbabwe.' },
  { name: 'Matabeleland North', description: 'In the northwest, this province includes the stunning Victoria Falls and the city of Hwange.' },
  { name: 'Matabeleland South', description: 'Neighboring Matabeleland North, this province has notable towns like Bulawayo and Beitbridge.' },
  { name: 'Midlands', description: 'Midlands, in the central region of the country, is known for its mining and agricultural activities.' },

];

const resolvers = {
  Query: {
    provinces: () => provinces,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
  }

  startServer();
  
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
});
