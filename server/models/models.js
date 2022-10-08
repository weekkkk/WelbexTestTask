const sequelize = require('../db')
const {
  DataTypes
} = require('sequelize')

const Test = sequelize.define('test', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATE,
  },
  name: {
    type: DataTypes.STRING
  },
  count: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  distance: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
})
// export
module.exports = {
  Test,
}