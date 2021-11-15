//controller file is where all the code for the request will be stored
const pool = require("./db");

module.exports = {
  postMessages: async (req, res) => {
    // Post messages to the database using PG
    try {
      const { fname, lname, email, title, message } = req.body;
      const form = await pool.query(
        "INSERT INTO form (fname, lname, email, title, message) VALUES ($1, $2, $3, $4, $5);",
        [fname, lname, email, title, message]
      );
      res.status(200).send(form.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  },
  postIpsum: async (req, res) => {
    // Post to the Ipsum table in the database
    try {
      const { title, content } = req.body;
      ipsum = await pool.query(
        "INSERT INTO ipsum (title, content) VALUES ($1, $2);",
        [title, content]
      );
      res.status(200).send(ipsum.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  },
  getIpsum: async (req, res) => {
    //fetches data from ipsum table in database
    try {
      const ipsum = await pool.query("SELECT * FROM ipsum;");
      if (ipsum.rows.length === 0) {
        return res.status(404).send("Data not found!");
      }
      res.status(200).send(ipsum.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  },
};
