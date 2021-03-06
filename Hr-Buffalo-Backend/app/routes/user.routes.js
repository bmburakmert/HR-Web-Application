module.exports = app => {
    const users = require('../controllers/user.controller.js');

    const router = require('express').Router();

    // Create a new User
    router.post('/', users.create);

    // Retrieve all users
    router.get('/', users.findAll);

    // Retrieve all published users
    // router.get('/published', users.findAllPublished);

    // Retrieve a single User with id
    router.get('/:id', users.findOne);

     // Retrieve a single User with Basics
    router.get('/:id/basic', users.findOneWithBasics);

    // Retrieve a single User with Details
    // router.get('/:id/details', users.findOneWithDetails);

    // Update a User with id
    router.put('/:id', users.update);
    router.put('/position/:id', users.updatePos);

    // Delete a User with id
    router.delete('/:id', users.delete);

    // Create a new User
    // router.delete('/', users.deleteAll);

    app.use('/api/users', router);
};
