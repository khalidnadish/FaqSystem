import express from "express";

import {
  getPersonCouners,
  getPersonCategory,
  getPersonQuastionDetail,
  getPersonAnsweredQuastion,
  getPersonAnsweredDetail,
  getPersonFollowerDetail,
  getPersonFollowingDetail,
  checkIsFollowed


  

} from "../controller/personInfoControl.js";

const router = express.Router();

 router.get("/:userid/:follow", getPersonCouners);
 router.get("/getPersonCategory/:userid", getPersonCategory);
 router.get("/getPersonQuastionDetail/:userid", getPersonQuastionDetail);
 router.get("/getPersonAnsweredQuastion/:userid", getPersonAnsweredQuastion);
 router.get("/getPersonAnsweredDetail/:userid", getPersonAnsweredDetail);
 router.get("/getPersonFollowerDetail/:userid", getPersonFollowerDetail);
 router.get("/getPersonFollowingDetail/:userid", getPersonFollowingDetail);

 router.get('/checkIsFollowed/:userid/:follow',checkIsFollowed);

  
 

export default router;
