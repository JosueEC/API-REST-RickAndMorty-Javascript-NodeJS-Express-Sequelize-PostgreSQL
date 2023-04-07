const DataTypes = require('sequelize')

module.exports = (database) => {
  database.define('Species',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      specie: {
        type: DataTypes.STRING,
        deafult: 'unknown'
      }
    },
    {
      timestamps: false
    }
  )
}
