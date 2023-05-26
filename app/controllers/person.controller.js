const db = require("../models");
const person = db.tus_personal_data;

exports.getData = async (req, res) => {
  const [results] = await db.sequelize.query(`SELECT * FROM tus_personal_data WHERE HHID = '${req.params.HHID}'`);
  if (results.length === 0) {
    return res.status(200).send({ status: false, data: null, message: "Мэдээлэл хоосон байна." });
  } else {
    res.status(200).send({ status: true, data: results[0], message: 'Success' });
  }
};

exports.insertData = async (req, res) => {
  if (!req.body) {
    res.status(200).send({
      status: false,
      message: "Хоосон хадгалагдах боломжгүй.",
      result: null,
    });
    return;
  }

  const { ...data } = req.body;

  person.create(data)
    .then((datas) => {
      res.status(200).send({
        status: true,
        message: "Амжилттай хадгаллаа",
        result: datas,
      });
    })
    .catch((err) => {
      res.status(200).send({
        status: false,
        message: err.message,
        result: null,
      });
    })
    .catch((err) => {
      res.status(200).send({
        status: false,
        message: err.message,
        result: null,
      });
    });
};

exports.updateData = async (req, res) => {
  if (!req.body) {
    res.status(200).send({
      status: false,
      message: "Хоосон хадгалагдах боломжгүй.",
      result: null,
    });
    return;
  }

  const { ...data } = req.body;

  person.update(data, {
    where: { HHID: req.params.HHID },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          status: true,
          message: "Амжилттай заслаа.",
          result: data,
        });
      } else {
        res.send({
          status: false,
          message: `Алдаа гарлаа`,
          result: null,
        });
      }
    })
    .catch((err) => {
      res.status(200).send({
        status: false,
        message: `Алдаа гарлаа`,
        result: null,
      });
    });
};

exports.deleteData = async (req, res) => {
  const [results] = await db.sequelize.query(`delete FROM tus_personal_data WHERE HHID = '${req.params.HHID}'`);
  if (results.length === 0) {
    return res.status(200).send({ status: false, data: null, message: "Мэдээлэл буруу байна." });
  } else {
    res.status(200).send({ status: true, message: 'Delete Success' });
  }
};