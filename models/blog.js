const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init({
    description:{
        type:DataTypes.TEXT
    }
},{sequelize})

module.exports = Blog