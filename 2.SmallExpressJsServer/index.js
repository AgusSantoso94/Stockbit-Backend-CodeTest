require('dotenv').config();
const express = require("express");
const cors = require("cors");
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
app.use('/', routes)

// catch 404 and forward to error handler
app.use('*', (req, res) => {
  return res.status(404).send({ 
    status: false,
    message: 'Request Not Found' 
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});