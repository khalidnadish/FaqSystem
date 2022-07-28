import express from "express";
import multer from "multer";

// import cookieParser from "cookie-Parser";

import {
  getAlluser,
  createUser,
  loginUser,
  avatarUpload,
  showFlloer,
  PepoleYouFollow,
  PepoleFollowinYouCount,
  showWhosFollowing,
  FollowUserAction
} from "../controller/userControl.js";

const router = express.Router();
// app.use("../images", express.static("uploads"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    console.log(file.path);

    cb(null, "./images/avatar/");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", createUser);
router.post("/login", loginUser);
router.post("/FollowUserAction", FollowUserAction);

router.post("/upload/:userId", upload.single("avatar"), avatarUpload);

router.get("/", getAlluser);
router.get("/showflower/:userId", showFlloer);
router.get("/PepoleYouFollow/:userId", PepoleYouFollow);
router.get("/PepoleFollowinYouCount/:userId", PepoleFollowinYouCount);
router.get("/showWhosFollowing/:userId", showWhosFollowing);

// router.post("/1000", newUser);

export default router;
