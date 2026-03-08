const pool = require("../config/db");

exports.getAllTasks = async () => {
  const result = await pool.query(
    "SELECT * FROM tasks ORDER BY created_at DESC"
  );
  return result.rows;
};

exports.createTask = async (title, status, projectId, assignedTo) => {
  const result = await pool.query(
    `INSERT INTO tasks (title, status, project_id, assigned_to)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [title, status || "open", projectId || null, assignedTo || null]
  );
  return result.rows[0];
};
