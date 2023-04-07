const DataTypes = require('sequelize')

module.exports = (database) => {
  database.define('Statuses',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      status: {
        type: DataTypes.ENUM,
        values: ['Alive', 'Dead', 'unknown'],
        default: 'Alive'
      }
    },
    {
      timestamps: false
    }
  )
}
