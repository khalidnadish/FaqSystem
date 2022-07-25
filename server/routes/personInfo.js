import express from "express";

import {
  getPersonCouners,
  getPersonCategory,
  getPersonQuastionDetail,
  getPersonAnsweredQuastion,
  getPersonAnsweredDetail,
  getPersonFollowerDetail,
  getPersonFollowingDetail

  

} from "../controller/personInfoControl.js";

const router = express.Router();

 router.get("/:userid", getPersonCouners);
 router.get("/getPersonCategory/:userid", getPersonCategory);
 router.get("/getPersonQuastionDetail/:userid", getPersonQuastionDetail);
 router.get("/getPersonAnsweredQuastion/:userid", getPersonAnsweredQuastion);
 router.get("/getPersonAnsweredDetail/:userid", getPersonAnsweredDetail);
 router.get("/getPersonFollowerDetail/:userid", getPersonFollowerDetail);
 router.get("/getPersonFollowingDetail/:userid", getPersonFollowingDetail);

  
 

export default router;
