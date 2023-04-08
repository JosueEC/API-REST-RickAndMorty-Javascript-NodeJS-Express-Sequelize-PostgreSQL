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
        defaultValue: 'unknown'
      },
      specie: {
        type: DataTypes.STRING,
        defaultValue: 'unknown'
      },
      status: {
        type: DataTypes.ENUM,
        values: ['Alive', 'Dead', 'unknown'],
        defaultValue: 'Alive'
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: false

      },
      image: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      favorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      timestamps: false
    }
  )
}
