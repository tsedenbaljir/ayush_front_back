module.exports = {
  HOST: "us-cdbr-east-06.cleardb.net",
  USER: "b846f265e10945",
  PASSWORD: "17427019",
  DB: "heroku_2fdba4a684d2921",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
// mysql://b846f265e10945:17427019@us-cdbr-east-06.cleardb.net/heroku_2fdba4a684d2921?reconnect=true
// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "",
//   DB: "testdb",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };

// module.exports = {
//   HOST: "103.87.69.135",
//   USER: "mohsuvgo_root",
//   PASSWORD: "mohs.uv@mn",
//   DB: "mohsuvgo_dataDB",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };