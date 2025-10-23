export default {
  client: "sqlite3",
  connection: {
    filename: "./src/database/database.db",
  },
  useNullAsDefault: true,
  migrations: {
    extesions: "ts",
    directory: "./src/database/migrations"
  },
  seeds: {
    extesions: "ts",
    directory: "./src/database/seeds",
  },
}