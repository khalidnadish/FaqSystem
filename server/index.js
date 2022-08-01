import express from "express";
import cors from "cors";
import faqRoutes from "./routes/faq.js";
import userRoutes from "./routes/user.js";
import categoryRoutes from "./routes/category.js";
import personInfoRoutes from "./routes/personInfo.js";

import compression from "compression";

// import cookieParser from "cookie-Parser";
import { configData } from "./helpeer/config.js";

// dotenv.config();
const app = express();

app.use(
  compression({
    level: 6,
    threshold: 0,
    filter: (req, res) => {
      if (req.headers["x-no-copression"]) {
        return false;
      }
      return compression.filter(req, res);
    },
  })
);
app.use(compression());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/images", express.static("images"));

app.use(khalid);
app.use("/faq", faqRoutes);
app.use("/user", userRoutes);
app.use("/category", categoryRoutes);
app.use("/person", personInfoRoutes);


function khalid(req, res, next) {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log("---------------------------------------------------------");
  console.log("request URL:" + fullUrl);
  console.log("---------------------------------------------------------");
  // console.log("env : " + configData.avatarUrl);
  next();
}

const server = app.listen(configData.port, (err) => {
  if (err) {console.log(err)}
  console.log(` app listening on port no ${configData.port}  `);
});
787;
server.timeout = 1000 * 60 * 10; // 10 minutes
