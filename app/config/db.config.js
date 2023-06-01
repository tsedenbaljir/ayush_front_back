module.exports = {
  HOST: "sql.freedb.tech",
  USER: "freedb_mohs_root",
  PASSWORD: "J53#8EKd$Bw@b%e",
  DB: "freedb_mohsdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

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