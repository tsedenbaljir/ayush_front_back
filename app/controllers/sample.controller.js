const db = require("../models");


exports.getDatas = async (req, res) => {
    // console.log(db.sequelize.connectionManager.pool._count)
    const { username, password } = req.body
  
    const [results] = await db.sequelize.query(`SELECT * FROM tbuser WHERE Username = '${username}' and Password = '${password}'`);
    if (results.length === 0) {
      return res.status(200).send({ status: false, data: null, message: "Хэрэглэгч олдсонгүй." });
    } else {
      // console.log(config.secret)
      var token = jwt.sign({ user: results[0] }, config.secret, { expiresIn: 86400 });
      res.status(200).send({ status: true, /* data: results[0], */ accessToken: token, message: 'Success' });
    }
  };