const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "Realdeal1",
    port: 4000,
});

module.exports = pool;
