const conn = require('./conn');
const { Sequelize } = conn;

const User = conn.define('user', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
});

module.exports = User;
