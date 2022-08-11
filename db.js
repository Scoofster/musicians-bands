const path = require('path');
const { Sequelize, Model } = require('sequelize');

// completed - create the new sequelize connection

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data.sqlite'
})

module.exports = {
    sequelize,
    Sequelize
};
