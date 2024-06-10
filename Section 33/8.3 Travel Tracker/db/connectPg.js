// db.js
import pg from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "sarthak",
    port: 5432,
});

async function connectDb() {
    if (!db._connecting && !db._connected) {
        await db.connect();
        console.log('Connected to PostgreSQL');
    }
}

export function getDb() {
    connectDb();
    return db;
}

export { connectDb };
