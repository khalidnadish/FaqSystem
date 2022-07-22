import { dataBase } from "../controller/database.js";
import { configData } from "../helpeer/config.js";



export function getPersonCouners(req, res) {
  const personIdidToGet = parseInt(req.params.userid);
  console.log("personal info:"+personIdidToGet)
  
  const sqlSelect = `SELECT userid,username,avatar,create_time,
(SELECT    COUNT(*)  FROM   usergroup  WHERE    userid = ?) AS category,
(SELECT    COUNT(*)  FROM   faq        WHERE    userid = ?) AS quastion,
(SELECT    COUNT(*)  FROM   answers    WHERE    userid = ?) AS answer,
(SELECT    COUNT(*)  FROM   myflower   WHERE    userid = ?) AS follower,
(SELECT    COUNT(*)  FROM   myflower   WHERE    followuser = ?) AS following1
FROM    user WHERE  userid = ? GROUP BY userid;`




  dataBase.execute(sqlSelect, [personIdidToGet,personIdidToGet,personIdidToGet,personIdidToGet,personIdidToGet,personIdidToGet],(err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.status(200).send(data);
  });
}



export function getPersonCategory(req, res) {
  const personIdidToGet = parseInt(req.params.userid);
  console.log("personal info:"+personIdidToGet)
  
  const sqlSelect =  `SELECT  usergroup.userid, usergroup.groupid,
                      (SELECT  category.catName FROM category
                      WHERE usergroup.groupid = category.catid)   AS catname
                      FROM usergroup  WHERE usergroup.userid = ? Group By catname`;
  



  dataBase.execute(sqlSelect, [personIdidToGet],(err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.status(200).send(data);
  });
}






export default {
    getPersonCouners,
    getPersonCategory
    // quastionCount,
    // anwerCount,
    // followerCount,
    // followingCount,
    // followAction,
    // directMsg,
    // Vote
};
