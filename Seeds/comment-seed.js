const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Thanks for teaching me that! Very interesting!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "TEXT is an awesome way to communicate with the text data",
    post_id: 1,
    user_id: 4
  },
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
