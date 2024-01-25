const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const itemRoutes = require("./src/routes/itemRoute");

const server = express();

server.use(cors());
server.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

server.use("/api/items", itemRoutes);

server.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});