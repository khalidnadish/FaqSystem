import express from "express";

import {
  getAll,
  getfaqid,
  getAnswerByfaqid,
  getAnswerCountByfaqid,
  getAllByGroup,
  getFaqByFollowerUser,
  favoriteQuation,
  QuationDataById,
  AnswerDataByFAQId,
  addOrRemoveFavorte
} from "../controller/faqControl.js";

const router = express.Router();
router.use(function(req,res,next){
console.log(req.url,"@",Date.now());
next()

})


router.get("/addOrRemoveFavorte/:userId/:faqid", addOrRemoveFavorte);

// router.get("/category", getCategory);
// router.get("/getUserCategory/:filterx", getUserCategory);
router.get("/bygroup/:filterx", getAllByGroup);
router.get("/FaqByFollowerUser/:filterx", getFaqByFollowerUser);
router.get("/AnswerByfaqid/:faqid", getAnswerByfaqid);
router.get("/getAnswerCountByfaqid/:faqid", getAnswerCountByfaqid);
router.get("/favoriteQuation/:userid", favoriteQuation);
router.get("/QuationDataById/:id", QuationDataById);
router.get("/AnswerDataByFAQId/:id", AnswerDataByFAQId);

router.get("/:faqid", getfaqid);
router.get("/", getAll);

export default router;
