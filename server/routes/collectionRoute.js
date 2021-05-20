import express from "express";
const router = express.Router();

// middlewares
import { protect, admin } from "../middleware/authMiddleware.js";

// controller
import {
  create,
  read,
  update,
  remove,
  list,
} from "../controller/collectionController.js";

// routes
router.post("/collection", protect, admin, create);
router.get("/collections", list);
router.get("/collection/:slug", read);
router.put("/collection/:slug", protect, admin, update);
router.delete("/collection/:slug", protect, admin, remove);

export default router;
