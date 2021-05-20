import express from "express";
const router = express.Router();

import {
  searchFilters,
  productsCount,
  getProducts,
  getAllProducts,
  listRelated,
  getAdminProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} from "../controller/productController.js";

// import { protect, admin } from "../middleware/authMiddleware";

router.route("/admin/products").get(getAdminProducts);
router.route("/product/:slug").get(getSingleProduct);

router.route("/admin/product/new").post(newProduct);
router.get("/products/total", productsCount);
router.post("/products", getProducts);
router.post("/all-products", getAllProducts);
router.get("/product/related/:productId", listRelated);
router.post("/search/filters", searchFilters);

router.route("/admin/product/:slug").put(updateProduct).delete(deleteProduct);

router.route("/review").put(createProductReview);
router.route("/reviews").get(getProductReviews);
router.route("/reviews").delete(deleteReview);

export default router;
