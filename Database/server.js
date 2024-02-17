import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "ReactDB",
});

app.get("/", (_, res) => {
  res.send("Hello World");
});

db.query("CREATE TABLE IF NOT EXISTS test (data JSON)", (error) => {
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
});

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

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
