import express from "express";

import {
  getAllCategory,
  getUserCategory,
  postfolowCategory,
  CategoryCount,
  CategoryCountYouFollow,
} from "../controller/categoryGroup.js";

const router = express.Router();

router.get("/", getAllCategory);

router.get("/CategoryCount", CategoryCount);
router.get("/CategoryCountYouFollow/:filterx", CategoryCountYouFollow);

router.get("/getUserCategory/:filterx", getUserCategory);
router.post("/follow", postfolowCategory);

export default router;
