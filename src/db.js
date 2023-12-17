import { createPool } from "mysql2/promise";

// create a pool of connections
export const pool = createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'NiKo1234',
    database: 'companydb'
});

