module.exports = app => {
    const basics = require('../controllers/basic.controller.js');

    const router = require('express').Router();

    // Create a new User
    router.post('/', basics.create);

    // Retrieve all users
    // router.get('/', users.findAll);

    // Retrieve all published users
    // router.get('/published', users.findAllPublished);

    // Retrieve a single User with id
    router.get('/:id', basics.findOne);

    // Update a User with id
    // router.put('/:id', users.update);

    // Delete a User with id
    // router.delete('/:id', users.delete);

    // Create a new User
    // router.delete('/', users.deleteAll);

    app.use('/api/users/basics', router);
};
