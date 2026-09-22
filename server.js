import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to our dining hall tracker.");
});

app.get("/menu", (req, res) => {
  res.send("Today's Dining Hall Menu");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
