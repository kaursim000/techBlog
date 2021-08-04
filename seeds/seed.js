const sequelize = require("../config/connection");
const db = require("../models");

const seedMe = async () => {
  await sequelize.sync({ force: true });
  await db.User.bulkCreate([
    {
      username: "sim",
      email: "sim@sim.sim",
      password: "password"
    },
    {
      username: "simran",
      email: "simran@sim.sim",
      password: "password1"
    },
    {
      username: "simi",
      email: "simi@sim.sim",
      password: "simran"
    }
  ]);

  await db.Blog.bulkCreate([
      {
          description:"testing blog",
          UserId:1
      },
      {
          description:"testing blog 2",
          UserId:1
      },
      {
          description:"simi's blog",
          UserId:3
      },
    ]);
    console.log('seeded');
    process.exit(0);
};

seedMe()