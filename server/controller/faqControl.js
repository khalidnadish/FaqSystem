import { dataBase } from "../controller/database.js";
import { configData } from "../helpeer/config.js";

export function getAll(req, res) {
  const sqlstatment = ` SELECT  
                              f.faqid,
                              f.faq,
                              f.userid,
                              f.catId,
                              f.sututes,
                              f.create_at,
                              f.faqcolseoropen,
                              f.update_at,
                              u.username AS autherName,
                              u.email,
                              u.avatar,
                              COUNT(a.faqid) AS AnswerCount,
                              c.catName
                          FROM
                              nadish_site.faq f
                                  LEFT JOIN
                              user u ON (f.userid = u.userid)
                                  LEFT JOIN
                              answers a ON (f.faqid = a.faqid)
                                  LEFT JOIN
                              category c ON (f.catId = c.catid)
                          GROUP BY f.faqid , f.faq , f.userid ,
                           f.catId , f.sututes , f.create_at ,
                           f.update_at , u.username , u.email ,
                           u.avatar , c.catName`
  
  dataBase.execute(sqlstatment, (err, data) => {
    err && console.log(err)
    res.status(200).send(data);
      });
}
// -----------------------------------------------------------------------------------
export function getfaqid(req, res) {
  const idToGet = parseInt(req.params.faqid);
  console.log("env user: " + configData.avatarUrl);
  let sqlQury = `SELECT faq.faqid ,faq.create_at,faq.faq, user.userid,user.username,
                 user.email AS email ,user.avatar AS avatar
                 FROM   faq
                 INNER JOIN  user
                 ON   faq.userid = user.userid
                where faq.faqid=?`;
  dataBase.query(sqlQury, [idToGet], (err, data) => {
    err && console.log(err)
    res.status(200).send(data);
  });
}
// ---------------------------------------------------------------------------------------
export function getAnswerByfaqid(req, res) {
  const idToGet = parseInt(req.params.faqid);
  let sqlQuery = `SELECT a.ansid, a.userid, a.faqid, a.answer, a.create_at,
                   a.update_at, u1.userid, u1.username, u1.avatar, f1.faqid
                  FROM answers a
                  INNER JOIN user u1 ON ( a.userid = u1.userid  )
                  INNER JOIN faq f1 ON ( a.faqid = f1.faqid  )
                  WHERE a.faqid = ?`;
  dataBase.query(sqlQuery, [idToGet], (err, data) => {
    err && console.log(err)
    res.status(200).send(data);
  });
}
export function getAnswerCountByfaqid(req, res) {
  const idToGet = parseInt(req.params.faqid);
  let queryCount = `SELECT count(ansid) as rowcount FROM
                    answers s where s.faqid=?`;
  dataBase.query(queryCount, [idToGet], (err, data) => {
    if (err) {
      console.log(err);
    }
    err && console.log(err)
    res.status(200).send(data);
  });
}
// --------------------------------------------------------------------------------
export function getCategory(req, res) {
  const sqlSelect = `SELECT  c.catid, c.catName,  count(*) faqrowcount
                    FROM category c `;
  const sqlJoin = ` JOIN faq f ON ( c.catid = f.catId  )  `;
  const sqlGroup = ` GROUP BY  c.catid, c.catName,  f.catId`;
  const sqlWhere = ``;
  const sqlOreder = ` order by faqrowcount desc`;
  const catSqlQury = sqlSelect + sqlJoin + sqlGroup + sqlWhere + sqlOreder;
  dataBase.execute(catSqlQury, (err, data) => {
    err && console.log(err)
    res.status(200).send(data);
  });
}
// ---------------------------------------------------------------------------------
export function getAllByGroup(req, res) {
  const filtercodeIs = parseInt(req.params.filterx);
  const newsqlStatment = `SELECT f.faq, f.userid, f.sututes, f.create_at, f.update_at,   count(*) As rowcount,
                                u1.userid As userid, u1.username As autherName, u1.avatar,
                                category.catName, category.catid, f.faqid As faqid1
                          FROM faq f
                          INNER JOIN user u1 On (f.userid = u1.userid )
                          INNER JOIN category On (f.catId = category.catid )
                          WHERE f.catid=?
                          GROUP BY f.faq, f.userid, f.sututes, f.create_at,
                          f.update_at,  u1.userid, u1.username, u1.avatar,
                          category.catName, category.catid, f.faqid`;
  dataBase.execute(newsqlStatment, [filtercodeIs], (err, data) => {
    err && console.log(err)
    res.status(200).send(data);
  });
}
// -----------------------------------------------------------------------------------
export function getFaqByFollowerUser(req, res) {
  console.log(req.cookies);
  res.cookie("sky", "nadish", { httpOnly: true });
  const filtercodeIs = parseInt(req.params.filterx);
  const newsqlStatment = `SELECT  f.faq, f.userid, f.sututes, f.create_at, f.update_at, a.faqid,
                                  count(*) As rowcount,u1.userid As userid, u1.username As autherName,
                                  u1.avatar, category.catName, category.catid, f.faqid As faqid1
                          FROM faq f
                                  INNNER JOIN answers a On f.faqid = a.faqid
                                  INNNER JOIN user u1 On (f.userid = u1.userid )
                                  INNNER JOIN category On (f.catId = category.catid )
                          WHEE f.userid=?
                          GROUP BY f.faq, f.userid, f.sututes, f.create_at,f.update_at, a.faqid, u1.userid,
                                   u1.username, u1.avatar,category.catName, category.catid, f.faqid`;
  dataBase.execute(newsqlStatment, [filtercodeIs], (err, data) => {
    err && console.log(err)
    res.status(200).send(data);
  });
}
// --------------------------------------------------------------------------------------------
export function getUserCategory(req, res) {
  const filtercodeIs = parseInt(req.params.filterx);
  const sqlSelect = `SELECT u.id, u.userid, u.groupid,  u1.userid, c.catid, c.catName,  count(*)
    FROM usergroup u
    INNER JOIN user u1 ON ( u.userid = u1.userid  )
    INNER JOIN category c ON ( u.groupid = c.catid  )
    INNER JOIN faq f ON ( c.catid = f.catId  )
  WHERE u.userid = ?
  GROUP BY u.id, u.userid, u.groupid, u1.userid, c.catid, c.catName, c.catIcon`;
  dataBase.execute(sqlSelect, [filtercodeIs], (err, data) => {
    err && console.log(err)
    res.status(200).send(data);
  });
}
// -------------------------------------------------------------------------------------------
export function favoriteQuation(req, res) {
  const filtercodeIs = parseInt(req.params.userid);
  const sqlStatment = `SELECT count(*) favoritequation 
                        FROM favoritequastion u
                        WHERE u.userid = ?`;
  dataBase.execute(sqlStatment, [filtercodeIs], (err, data) => {
    err && console.log(err)
    res.status(200).send(data);
  });
}


export function QuationDataById(req, res) {
  const filtercodeIs = parseInt(req.params.id);
  const sqlStatment = `SELECT faqid,faq,userid,catid,faqcolseoropen,create_at,
  (SELECT  category.catName FROM category
   WHERE   category.catid = faq.catId) AS catname,
  (SELECT  user.username    FROM  user
   WHERE   user.userid = faq.userid) AS username,
   (SELECT  user.avatar    FROM  user
    WHERE   user.userid = faq.userid) AS Qavatar,
  (SELECT  COUNT(answers.faqid)  FROM  answers
   WHERE   answers.faqid = faq.faqid) AS replycount FROM  faq
WHERE  faqid =?`


  dataBase.execute(sqlStatment, [filtercodeIs], (err, data) => {
    err && console.log(err)
    res.status(200).send(data);
  });
}


export function AnswerDataByFAQId(req, res) {
  const filtercodeIs = parseInt(req.params.id);
  const sqlStatment = `SELECT answers.ansid,answers.answer,answers.userid,answers.faqid,answers.create_at,
                      (select user.username from user where user.userid=answers.userid) as username,
                      (select user.avatar from user where user.userid=answers.userid) as avatar 
                    FROM nadish_site.answers
                    WHERE answers.faqid=?`
  
  dataBase.execute(sqlStatment, [filtercodeIs], (err, data) => {
    err && console.log(err)
    res.status(200).send(data);
  });
}






export function addOrRemoveFavorte(req, res) {
  const userId = parseInt(req.params.userId);
  const faqid = parseInt(req.params.faqid);

   console.log(userId)
   console.log(faqid)
  // let userId=1;
  // let faqid=2;


  let check_date = `SELECT * FROM  favoritequastion  WHERE  (userid=? AND faqid=?)`
  dataBase.execute(check_date,[userId, faqid],(err, results) => {
      err && console.log(err)
      results.length===0 ? addToFavorite(userId, faqid):RemoveFromFavorite(userId, faqid)
      results.length===0 ? res.send({ msgs: "added" }) :res.send({ msgs: "removed" })
    }
  )};


function addToFavorite (userId, faqid) {
  let inset_date = `INSERT INTO favoritequastion (userid, faqid) VALUES (?,?)`
  dataBase.execute(inset_date,[userId, faqid],(err, results) => {
      err && console.log(err)
      console.log(" favorte add well  >>>")
 
    }
  );
}

function RemoveFromFavorite (userId, faqid) {
  let remove_date = `DELETE FROM favoritequastion where userid=? and faqid=?`
  dataBase.execute(remove_date,[userId, faqid],(err, results) => {
      err && console.log(err)
      console.log(" favorte remove well  >>>")
 
    }
  );
}























export default {
  getAll,
  getfaqid,
  getAnswerByfaqid,
  getAnswerCountByfaqid,
  getCategory,
  getAllByGroup,
  getFaqByFollowerUser,
  getUserCategory,
  favoriteQuation,
  QuationDataById,
  AnswerDataByFAQId,
  addOrRemoveFavorte

};
