import sql from 'better-sqlite3';

const db = process.env.VERCEL ? new Database(':memory:') : new Database('training.db');


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
