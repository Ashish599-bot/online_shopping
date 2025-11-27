require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      email_user: process.env.EMAIL_USER,
      host: "localhost",
      port: 5433,
    },
  },
};
