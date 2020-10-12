import * as dotenv from "dotenv";

dotenv.config();

export default {
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || "development",

  development: {
    db: {
      dialect: "sqlite",
      storage: ":memory:",
    },
  },
  production: {
    db: {
      dialect: "sqlite",
      storage: "db/database.sqlite",
    },
  },
};
