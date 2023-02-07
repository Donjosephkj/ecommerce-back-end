const express = require("express");

const cors = require("cors");

const server = express();

const dataService = require("./services/dataservice");

server.use(
  cors({
    origin: "http://localhost:4200",
  })
);

server.use(express.json());

server.listen(3000, () => {
  console.log("cart Server is listening at port 3000");
});

//display all product

server.get("/all-products", (req, res) => {
  dataService.allProducts().then((result) => {
    res.status(result.statusCode).json(result);
  });
});
server.get("/view-product/:id", (req, res) => {
  dataService.viewProduct(req.params.id).then((result) => {
    res.status(result.statusCode).json(result);
  });
});
