//import sql from 'better-sqlite3';
<<<<<<< HEAD

 //const db = sql('training.db');

//old code end 




const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

// Define the path to the data directory
const dataDir = path.join(process.cwd(), 'data');

// Check if the data directory exists, if not create it
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// Define the database path
const dbPath = process.env.VERCEL 
    ? path.join(dataDir, 'training.db') // Use the data directory in production
    : path.join(dataDir, 'training.db'); // Local development

// Initialize the database
const db = new Database(dbPath, { verbose: console.log }); // Added logging for debugging

=======
// const fs = require('fs');
// const path = require('path');
// const Database = require('better-sqlite3');

// // Ensure the data directory exists on Vercel
// const dbPath = './data/training.db';
// const dataDir = path.dirname(dbPath);

// if (process.env.VERCEL) {
//   if (!fs.existsSync(dataDir)) {
//     fs.mkdirSync(dataDir, { recursive: true });
//   }
// }
const Database = require('better-sqlite3');

// Initialize the database
const db = process.env.VERCEL 
    ? new Database(':memory:') // Use an in-memory database on Vercel
    : new Database('training.db');
>>>>>>> 3caaa7b22aaf0250c155a78bc28a68a04d91752c

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT,
    username TEXT
  );
`);

db.exec(`CREATE TABLE IF NOT EXISTS sessions (
  id TEXT NOT NULL PRIMARY KEY,
  expires_at INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
)`);

db.exec(`
  CREATE TABLE IF NOT EXISTS trainings (
    id INTEGER PRIMARY KEY,
    title TEXT,
    slug TEXT,
    image TEXT,
    description TEXT
  );
`);

const hasTrainings =
  db.prepare('SELECT COUNT(*) as count FROM trainings').get().count > 0;

if (!hasTrainings) {
  db.exec(`
    INSERT INTO trainings (title,slug, image, description)
    VALUES
    ('Yoga', 'yoga', '/yoga.jpg', 'A gentle way to improve flexibility and balance.'),
    ('Boxing', 'boxing', '/boxing.jpg', 'A high-energy workout that improves strength and speed.'),
    ('Running', 'running', '/running.jpg', 'A great way to improve cardiovascular health and endurance.'),
    ('Weightlifting', 'weightlifting', '/weightlifting.jpg', 'A strength-building workout that helps tone muscles.'),
    ('Cycling', 'cycling', '/cycling.jpg', 'A low-impact workout that improves cardiovascular health and endurance.'),
    ('Gaming','gaming', '/gaming.jpg', 'A fun way to improve hand-eye coordination and reflexes.'),
    ('Sailing', 'sailing', '/sailing.jpg', 'A relaxing way to enjoy the outdoors and improve balance.');
`);
}

export default db;
