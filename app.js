const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express();

app.use('/graphql', graphqlHTTP({

}));

const port = 4000;

app.listen(port, () => {
  console.log("Now active and listening for requests on port", port)
});

