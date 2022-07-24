import express from "express";

import {
  getPersonCouners,
  getPersonCategory,
  getPersonQuastionDetail,
  getPersonAnsweredQuastion,
  getPersonAnsweredDetail
  

} from "../controller/personInfoControl.js";

const router = express.Router();

 router.get("/:userid", getPersonCouners);
 router.get("/getPersonCategory/:userid", getPersonCategory);
 router.get("/getPersonQuastionDetail/:userid", getPersonQuastionDetail);
 router.get("/getPersonAnsweredQuastion/:userid", getPersonAnsweredQuastion);
 router.get("/getPersonAnsweredDetail/:userid", getPersonAnsweredDetail);

  

// router.get("/bygroup/:filterx", getAllByGroup);
// router.get("/FaqByFollowerUser/:filterx", getFaqByFollowerUser);

// router.get("/:faqid", getfaqid);
// router.get("/AnswerByfaqid/:faqid", getAnswerByfaqid);
// router.get("/getAnswerCountByfaqid/:faqid", getAnswerCountByfaqid);
// router.get("/favoriteQuation/:userid", favoriteQuation);

export default router;
