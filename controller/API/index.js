// Server connection
const router = require('express').Router();
// User Routes
const userRoutes = require('./user');
// Post Routes
const postRoutes = require('./post');
// Comment Routes
const commentRoutes = require('./comment');

// Define route path for the API to use, e.g. api/users/
router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

// Export the router
module.exports = router;