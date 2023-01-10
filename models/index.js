// User model
const Users = require('./Users');
// Post model
const Posts = require('./Posts');
// Comment model
const Comments = require('./Comments');

// Create associations between the models
// User-Post relationship
Users.hasMany(Posts, {
    foreignKey: 'user_id'
});
//Post-User relationship
Posts.belongsTo(Users, {
    foreignKey: 'user_id'
});

// Comment-User relationship
Comments.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

// Comment-Post relationship
Comments.belongsTo(Posts, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});

// User-Comment relationsihp
Users.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

// Post-Comment relationship
Posts.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks:true
})

// Export the modules
module.exports = { Users, Posts, Comments };