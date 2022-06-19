const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,
//   dialectOptions: {
//     ssl: true
//   },
//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

var sequelize = new Sequelize("postgres://lieequaxmnrghh:99665986357d1e2f11be0f57c9bbde445df2087509b2963948897795e9324640@ec2-34-194-158-176.compute-1.amazonaws.com:5432/dagiouneoeg0o9", {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.studentInfo = require("./student_info_model.js")(sequelize, Sequelize);

module.exports = db;
