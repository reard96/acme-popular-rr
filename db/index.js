const conn = require('./conn');
const User = require('./User');

const initialUsers = [
  { name: 'batman', rating: 10},
  { name: 'superman', rating: 4},
  { name: 'spiderman', rating: 8},
  { name: 'wonder woman', rating: 12},
  { name: 'the hulk', rating: -4},
  { name: 'catwoman', rating: 7},
  { name: 'the flash', rating: 9},
];

const sync = () => {
  return conn.sync({ force: true });
};

const seed = () => {
  Promise.all(initialUsers.map(user => User.create(user)));
};

module.exports = {
  models: {
    User
  },
  sync,
  seed
};
