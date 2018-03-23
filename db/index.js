const conn = require('./conn');
const User = require('./User');

const initialUsers = [
  { name: 'Batman', rating: 10},
  { name: 'Superman', rating: 4},
  { name: 'Spiderman', rating: 8},
  { name: 'Wonder Woman', rating: 12},
  { name: 'The Hulk', rating: -4},
  { name: 'Catwoman', rating: 7},
  { name: 'The Flash', rating: 9},
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
