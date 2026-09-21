import express from "express";

const app = express();
const PORT = 3000;

const dining_halls = [
  { title: "Worcester Dining Hall" },
  { title: "Franklin Dining Hall" },
  { title: "Berkshire Dining Hall" },
  { title: "Hampshire Dining Hall" },
];

app.get("/", (req, res) => {
  res.send("Welcome to our dining hall tracker.");
});

app.get("/halls", (req, res) => {
  res.send(`
    <h1>Dining Halls</h1>
    <ul>
      ${dining_halls.map(hall => `<li>${hall.title}</li>`).join("")}
    </ul>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
