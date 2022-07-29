import { dataBase } from "../controller/database.js";
import { configData } from "../helpeer/config.js";

export function getPersonCouners(req, res) {
  const personIdidToGet = parseInt(req.params.userid);
  const follow = parseInt(req.params.follow);
  console.log("personal info:" + personIdidToGet,follow);

  const sqlSelect = `SELECT userid,username,avatar,create_time,
(SELECT   COUNT(distinct(groupid)) FROM   usergroup  WHERE    userid = ?) AS category,
(SELECT    COUNT(*)  FROM   faq        WHERE    userid = ?) AS quastion,
(SELECT    COUNT(*)  FROM   answers    WHERE    userid = ?) AS answer,
(SELECT    COUNT(*)  FROM   myflower   WHERE    userid = ?) AS follower,
(SELECT    COUNT(*)  FROM   myflower   WHERE    followuser = ?) AS following1,
(SELECT    COUNT(*)  FROM   myflower   WHERE    userid = ? and followuser=?) AS isYoufollowed
FROM    user WHERE  userid = ? GROUP BY userid;`;

  dataBase.execute(
    sqlSelect,
    [
      personIdidToGet,
      personIdidToGet,
      personIdidToGet,
      personIdidToGet,
      personIdidToGet,
      follow,
      personIdidToGet,
      personIdidToGet,
    ],
    (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
      res.status(200).send(data);
    }
  );
}

export function getPersonCategory(req, res) {
  const personIdidToGet = parseInt(req.params.userid);
  console.log("personal info:" + personIdidToGet);

  const sqlSelect = `SELECT  usergroup.userid, usergroup.groupid,
                      (SELECT  category.catName FROM category
                      WHERE usergroup.groupid = category.catid)   AS catname
                      FROM usergroup  WHERE usergroup.userid = ? Group By catname`;

  dataBase.execute(sqlSelect, [personIdidToGet], (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.status(200).send(data);
  });
}

export function getPersonQuastionDetail(req, res) {
  const personIdidToGet = parseInt(req.params.userid);
  console.log("personal info:" + personIdidToGet);

  const sqlstatment = `SELECT  faq.faqid,faq.faq,faq.create_at,
  (SELECT 
          COUNT(answers.faqid)
      FROM
          answers
      WHERE
          answers.faqid = faq.faqid) AS ans_count
FROM
  nadish_site.faq
WHERE
  userid =?`;

  dataBase.execute(sqlstatment, [personIdidToGet], (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.status(200).send(data);
  });
}

export function getPersonAnsweredQuastion(req, res) {
  const personIdidToGet = parseInt(req.params.userid);
  console.log("personal info:" + personIdidToGet);

  const sqlstatment = `SELECT   answers.ansid,answers.answer,answers.userid,answers.create_at,
                        (SELECT   user.username  FROM  user
                          WHERE
                              user.userid = answers.userid) AS username,
                      (SELECT user.avatar FROM  user
                          WHERE
                              user.userid = answers.userid) AS avatar
                      FROM
                        answers
                      WHERE
                          answers.faqid = ?`;

  dataBase.execute(sqlstatment, [personIdidToGet], (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.status(200).send(data);
  });
}

export function getPersonAnsweredDetail(req, res) {
  const personIdidToGet = parseInt(req.params.userid);
  console.log("personal info:" + personIdidToGet);

  const sqlstatment = `SELECT  answers.userid, answers.answer, answers.create_at, answers.faqid, answers.ansid,
                      (SELECT  faq.faq  FROM      faq     WHERE  faq.faqid = answers.faqid) AS quastion,
                      (SELECT  faq.userid FROM     faq    WHERE  faq.faqid = answers.faqid) AS usercreator,
                      (SELECT  user.username FROM  user   WHERE   user.userid = usercreator) AS usercreator_name,
                      (SELECT  user.avatar   FROM  user   WHERE   user.userid = usercreator) AS usercreator_avatar,
                      (SELECT  faq.create_at FROM  faq    WHERE faq.faqid = answers.faqid) AS quastion_date

                    FROM  answers WHERE userid = ?`;

  dataBase.execute(sqlstatment, [personIdidToGet], (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.status(200).send(data);
  });
}



export function getPersonFollowerDetail(req, res) {
  const personIdidToGet = parseInt(req.params.userid);
  console.log("personal info:" + personIdidToGet);

  const sqlstatment = `SELECT  myflower.userid,myflower.followuser,myflower.create_at,myflower.id,myflower.create_at,
                      (SELECT  user.username  FROM  user   WHERE  myflower.userid = user.userid) mainusername,
                      (SELECT  user.username  FROM  user   WHERE  myflower.followuser = user.userid) followusername,
                      (SELECT  user.avatar    FROM  user   WHERE  myflower.followuser = user.userid) followavatar
                      FROM myflower where userid=?`
  
  dataBase.execute(sqlstatment, [personIdidToGet], (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.status(200).send(data);
  });
}



export function getPersonFollowingDetail(req, res) {
  const personIdidToGet = parseInt(req.params.userid);
  console.log("personal info:" + personIdidToGet);

  const sqlstatment = `SELECT  myflower.userid,myflower.followuser,myflower.create_at,myflower.id,myflower.create_at,
                      (SELECT  user.username  FROM  user   WHERE  myflower.userid = user.userid) mainusername,
                      (SELECT  user.username  FROM  user   WHERE  myflower.followuser = user.userid) followusername,
                      (SELECT  user.avatar    FROM  user   WHERE  myflower.followuser = user.userid) followavatar
                      FROM myflower where followuser=?`
  
  dataBase.execute(sqlstatment, [personIdidToGet], (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.status(200).send(data);
  });
}





export function checkIsFollowed(req, res) {
  const userid = parseInt(req.params.userid);
  const follow = parseInt(req.params.follow);


  console.log(userid,follow);

  const sqlstatment =  `SELECT count(userid) as checkfollow FROM nadish_site.myflower  where userid=? and followuser=?`
  
  
  
  dataBase.execute(sqlstatment, [userid,follow], (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.status(200).send(data);
  });
}









export default {
  getPersonCouners,
  getPersonCategory,
  getPersonQuastionDetail,
  getPersonAnsweredQuastion,
  getPersonAnsweredDetail,
  getPersonFollowerDetail,
  getPersonFollowingDetail,
  checkIsFollowed
  // quastionCount,
  // anwerCount,
  // followerCount,
  // followingCount,
  // followAction,
  // directMsg,
  // Vote
};
