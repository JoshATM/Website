import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser"; // Import the body-parser package
const app = express();
app.use(cors());
app.use(bodyParser.json()); // Use body-parser to parse JSON request bodies

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "ReactDB",
});

app.get("/", (_, res) => {
  res.send("Hello World");
});

// Create the "users" table if it doesn't exist
db.query(
  "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, FirstName VARCHAR(255), LastName VARCHAR(255), Email VARCHAR(255), DOB DATE, tel VARCHAR(255), password VARCHAR(255))",
  (error) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    } else {
      const testData = { value: 1 };
      db.query(
        "INSERT INTO test (data) VALUES (?)",
        [JSON.stringify(testData)],
        (error) => {
          if (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
          } else {
            console.log("Data inserted successfully");
          }
        }
      );
    }
  }
);

app.get("/test", (_, res) => {
  db.query("SELECT * FROM test", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log(results);
      res.status(200).json(results);
    }
  });
});

app.post("/register", (req, res) => {
  const { FirstName, LastName, Email, DOB, tel, password } = req.body;
  const query =
    "INSERT INTO users (FirstName, LastName, Email, DOB, tel, password) VALUES (?,?,?,?,?,?)";
  const values = [FirstName, LastName, Email, DOB, tel, password];

  db.query(query, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log(results);
      res.status(200).json(results);
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE Email = ? AND password = ?";
  const values = [email, password];

  db.query(query, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log(results);
      res.status(200).json(results);
    }
  });
});

app.post("/saveContent", (req, res) => {
  const { content } = req.body;
  console.log(content);
  res.status(200).json({ message: "Content saved successfully" });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
