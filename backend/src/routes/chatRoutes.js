import express from "express";
import { getStreamingToken } from "../controllers/chatControllers.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();
router.get("/token", protectRoute, getStreamingToken);




export default router;