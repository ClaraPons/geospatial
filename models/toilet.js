const { DataTypes } = require("sequelize")

module.exports = sequelize => {
    const Toilet = sequelize.define('Toilet', {
      address: {
        type: DataTypes.STRING
      },
      timetable: {
          type: DataTypes.STRING
      },
      district: {
          type: DataTypes.STRING
      },
      position: {
        type: DataTypes.GEOMETRY
      }
    })
  
    return Toilet
  }