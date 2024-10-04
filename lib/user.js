import db from "./db";


export function createUser(email, password, username) {
    const result = db.prepare('INSERT INTO users (email, password, username) values(?,?,?)').run(email, password, username);
    return result.lastInsertRowid;
    
}

export function getUserByEmail(email){
  return db.prepare('SELECT * FROM users WHERE email=?').get(email);

}

export function getUserById(id){
  return db.prepare('SELECT * FROM users WHERE id=?').get(id);
}