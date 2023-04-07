const DataTypes = require('sequelize')

module.exports = (database) => {
  database.define('Character',
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
      gender: {
        type: DataTypes.ENUM,
        values: ['Female', 'Male', 'Genderless', 'unknown'],
        default: 'unknown'
      },
      specie: {
        type: DataTypes.STRING,
        deafult: 'unknown'
      },
      status: {
        type: DataTypes.ENUM,
        values: ['Alive', 'Dead', 'unknown'],
        deafult: 'Alive'
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
