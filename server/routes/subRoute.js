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
} from "../controller/subController.js";

// routes
router.post("/sub", create);
router.get("/subs", list);
router.get("/sub/:slug", read);
router.put("/sub/:slug", update);
router.delete("/sub/:slug", remove);

export default router;
