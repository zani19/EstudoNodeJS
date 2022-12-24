const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress','root', '',{
    host:'127.0.0.1',
    port:'3306',
    dialect:'mysql',
    timezone: '-03:00'
});

module.exports = connection;