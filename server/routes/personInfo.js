import express from "express";

import {
  getPersonCouners,
  getPersonCategory,
  getPersonQuastionDetail,
  getPersonAnsweredQuastion,
  getPersonAnsweredDetail,
  getPersonFollowerDetail,
  getPersonFollowingDetail,
  checkIsFollowed,
  FollowUser,
  UnFollowUser
} from "../controller/personInfoControl.js";

const router = express.Router();

router.get("/getPersonCategory/:userid", getPersonCategory);
router.get("/getPersonQuastionDetail/:userid", getPersonQuastionDetail);
router.get("/getPersonAnsweredQuastion/:userid", getPersonAnsweredQuastion);
router.get("/getPersonAnsweredDetail/:userid", getPersonAnsweredDetail);
router.get("/getPersonFollowerDetail/:userid", getPersonFollowerDetail);
router.get("/getPersonFollowingDetail/:userid", getPersonFollowingDetail);

router.post('/FollowUser/:userid/:follow',FollowUser);
router.delete('/UnFollowUser/:userid/:follow',UnFollowUser);
router.get("/:userid/:follow", getPersonCouners);


  
 

export default router;
