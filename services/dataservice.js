const db = require("./db");

//all-products

const allProducts = () => {
  return db.Product.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        products: result,
      };
    } else {
      return {
        statusCode: 401,
        message: "Something went wrong",
      };
    }
  });
};

//viewProduct
const viewProduct = (id) => {
  return db.Product.findOne({
    id,
  }).then((result) => {
    if (result) {
      return {
        statusCode: 200,
        product: result,
      };
    } else {
      return {
        statusCode: 401,
        message: "Product is Currently Out of Stock",
      };
    }
  });
};

module.exports = {
  allProducts,
  viewProduct,
};
