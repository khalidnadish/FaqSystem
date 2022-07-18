import { dataBase } from "../controller/database.js";

export function getAllCategory(req, res) {
  const sqlSelect = `SELECT  c.catid, c.catName,  count(*) faqrowcount
FROM category c `;
  const sqlJoin = ` JOIN faq f ON ( c.catid = f.catId  )  `;
  const sqlGroup = ` GROUP BY  c.catid, c.catName,  f.catId`;
  const sqlWhere = ``;
  const sqlOreder = ` order by faqrowcount desc`;

  const catSqlQury = sqlSelect + sqlJoin + sqlGroup + sqlWhere + sqlOreder;

  dataBase.execute(catSqlQury, (err, data) => {
    if (err) {
      console.log(err);
    }
    // console.log(data);
    res.status(200).send(data);
  });
}

export function getUserCategory(req, res) {
  const filtercodeIs = parseInt(req.params.filterx);
  const sqlSelect = `SELECT u.id, u.userid, u.groupid,  u1.userid, c.catid, c.catName,  count(*) As  faqrowcount
  FROM usergroup u`;
  const sqlJoin = ` INNER JOIN user u1 ON ( u.userid = u1.userid  )
  INNER JOIN category c ON ( u.groupid = c.catid  )
  INNER JOIN faq f ON ( c.catid = f.catId  )   `;
  const sqlGroup = `  GROUP BY u.id, u.userid, u.groupid, u1.userid, c.catid, c.catName, c.catIcon`;
  const sqlWhere = ` WHERE u.userid = ?`;
  const sqlOreder = ` `;
  const catSqlQury = sqlSelect + sqlJoin + sqlWhere + sqlGroup + sqlOreder;

  dataBase.execute(catSqlQury, [filtercodeIs], (err, data) => {
    if (err) {
      console.log(err);
    }
    // console.log(data);
    res.status(200).send(data);
  });
}

export function postfolowCategory(req, res) {
  const checksqlSelect = `select * from usergroup  where userid=? and groupid=?`;
  dataBase.execute(
    checksqlSelect,
    [req.body.userid, req.body.groupid],
    (err, data) => {
      if (data.length === 0) {
        const sqlSelect = `INSERT INTO usergroup (userid, groupid) VALUES (?,?)`;
        dataBase.execute(
          sqlSelect,
          [req.body.userid, req.body.groupid],
          (err, data) => {
            if (err) console.log(err);
            res.status(201).send("Insert");
          }
        );
      } else {
        console.log("exist");
        // res.status(201).send("exist");
      }
    }
  );
}

const isExistFlower = (userid, groupid) => {
  let isTher = true;
  const checksqlSelect = `select * from usergroup  where userid=? and groupid=?`;
  dataBase.execute(checksqlSelect, [userid, groupid], (err, data) => {
    if (data.length === 0) {
      console.log("not exist");
      isTher = true;
    } else {
      console.log(" exist");
      isTher = false;
    }
  });
  return isTher;
};

export function CategoryCount(req, res) {
  const sqlStatment = `SELECT count(*) as GroupRecord FROM category `;

  dataBase.execute(sqlStatment, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(data);
  });
}

export function CategoryCountYouFollow(req, res) {
  const filtercodeIs = parseInt(req.params.filterx);
  const sqlStatment = `SELECT count(*) GroupCountYouFollow
  FROM usergroup u
  WHERE u.userid = ?`;

  dataBase.execute(sqlStatment, [filtercodeIs], (err, data) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(data);
  });
}

export default {
  getAllCategory,
  getUserCategory,
  postfolowCategory,
  CategoryCount,
  CategoryCountYouFollow,
};
