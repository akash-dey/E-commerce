const express = require("express");
const router = express.Router();

const { isAdmin, isAuthenticated, isSignedIn } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  updateProduct,
  deleteProduct,
  getAllProduct,
} = require("../controllers/product");

router.param("userId", getUserById);
router.param("productId", getProductById);

//routes
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAdmin,
  isAuthenticated,
  createProduct
);

router.get("/product/:productId", getProduct);
router.get("/product/photo//:productId", photo);

//delete
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct
);
//update
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);

//listing routes
router.get("/products", getAllProduct);

module.exports = router;
