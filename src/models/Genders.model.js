const DataTypes = require('sequelize')

module.exports = (database) => {
  database.define('Genders',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      gender: {
        type: DataTypes.ENUM,
        values: ['Female', 'Male', 'Genderless', 'unknown'],
        allowNull: false,
        deafult: 'unknown'
      }
    },
    {
      timestamps: false
    }

  )
}
