import express from "express";
const router = express.Router();

// middlewares
// import { protect, admin } from "../middleware/authMiddleware.js";

// controller
import {
  create,
  read,
  update,
  remove,
  list,
  getSubs,
} from "../controller/categoryController.js";

// routes
router.post("/category", create);
router.get("/categories", list);
router.get("/category/:slug", read);
router.put("/category/:slug", update);
router.delete("/category/:slug", remove);
router.get("/category/subs/:_id", getSubs);

export default router;
