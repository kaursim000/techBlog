const User = require("./newUser");
const Blog = require("./blog");

User.hasMany(Blog);
Blog.belongsTo(User);

module.exports = {
    User,
    Blog
}