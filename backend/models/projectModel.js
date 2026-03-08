const pool = require("../config/db");

exports.getAllProjects = async () => {
  const result = await pool.query(
    "SELECT * FROM projects ORDER BY created_at DESC"
  );
  return result.rows;
};

exports.createProject = async (name, description, ownerId) => {
  const result = await pool.query(
    `INSERT INTO projects (name, description, owner_id)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [name, description, ownerId]
  );
  return result.rows[0];
};
