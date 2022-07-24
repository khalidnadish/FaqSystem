import { dataBase } from "../controller/database.js";
import { configData } from "../helpeer/config.js";

export function getPersonCouners(req, res) {
  const personIdidToGet = parseInt(req.params.userid);
  console.log("personal info:" + personIdidToGet);

  const sqlSelect = `SELECT userid,username,avatar,create_time,
(SELECT   COUNT(distinct(groupid)) FROM   usergroup  WHERE    userid = ?) AS category,
(SELECT    COUNT(*)  FROM   faq        WHERE    userid = ?) AS quastion,
(SELECT    COUNT(*)  FROM   answers    WHERE    userid = ?) AS answer,
(SELECT    COUNT(*)  FROM   myflower   WHERE    userid = ?) AS follower,
(SELECT    COUNT(*)  FROM   myflower   WHERE    followuser = ?) AS following1
FROM    user WHERE  userid = ? GROUP BY userid;`;

  dataBase.execute(
    sqlSelect,
    [
      personIdidToGet,
      personIdidToGet,
      personIdidToGet,
      personIdidToGet,
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

  const sqlstatment = `SELECT  answers.userid, answers.answer, answers.create_at, answers.faqid,
                      (SELECT  faq.faq  FROM  faq         WHERE  faq.faqid = answers.faqid) AS quastion,
                      (SELECT  faq.userid FROM faq        WHERE  faq.faqid = answers.faqid) AS usercreator,
                      (SELECT  user.username FROM  user   WHERE   user.userid = usercreator) AS usercreator_name,
                      (SELECT  user.avatar   FROM  user   WHERE   user.userid = usercreator) AS usercreator_avatar
                    FROM  answers WHERE userid = ?`;

  dataBase.execute(sqlstatment, [personIdidToGet], (err, data) => {
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
  // quastionCount,
  // anwerCount,
  // followerCount,
  // followingCount,
  // followAction,
  // directMsg,
  // Vote
};
