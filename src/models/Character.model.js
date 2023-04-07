const DataTypes = require('sequelize')

module.exports = (database) => {
  database.define('Characters',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: false

      },
      image: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  )
}
