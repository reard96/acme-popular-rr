const express = require('express');
const path = require('path');
const app = express();

const db = require('./db');
const { User } = db.models;

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.use(require('body-parser').json());

const port = process.env.PORT || 3000;

app.get('/api/users', (req, res, next) => {
  User.findAll()
    .then(users => res.send(users))
    .catch(next);
});

app.post('/api/users', (req, res, next) => {
  User.create(req.body)
    .then(user => res.send(user))
    .catch(next);
});

app.put('/api/users/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      Object.assign(user, req.body);
      return user.save();
    })
    .then(user => res.send(user))
    .catch(next);
});

app.delete('/api/users/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      return user.destroy();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
});

app.listen(port, () => console.log(`listening on port ${port}`));

db.sync()
  .then(() => db.seed());
