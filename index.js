require("dotenv").config();

const { response } = require("express");
const express = require("express");
const connectDB = require("./config/database");
const user = require('./api/user');


const app = express();

const events = [
  { id: 1, title: "EVENTO 1" },
  { id: 2, title: "EVENTO 2" },
  { id: 3, title: "EVENTO 3" },
  { id: 4, title: "EVENTO 4" },
];

app.use(express.json());//middleware
app.use(user)

app.get("/", (req, res) => {
  res.send("Hola Henry Tene Torres");
});

app.get("/api/events", (req, res) => {
  res.json(events);
});

app.get("/api/events/:id", (req, res) => {
  const eventId = Number(req.params.id);
  console.log(eventId);
  const event = events.find((elem) => elem.id === eventId);

  if (!event) {
    return res
      .status(404)
      .json({ error: `Event with id:${eventId} not found` });
  }

  return res.status(200).json(event);
});

app.post("/api/events", (req, res) => {
  const { title, content } = req.body;
  const maxId = events.length > 0 ? Math.max(...events.map((n) => n.id)) : 0;
  events.push({ id: maxId + 1, title });

  if (!content) {
    return res.status(400).json({ message: "content key is required" });
  }
  return res.status(200).json({ message: "Event created", events });
});

app.put("/api/events/:id", (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const event = events.find((elem) => elem.id === Number(id));

  if (!content) {
    return res.status(400).json({ message: "content key is required" });
  }
  return res.status(200).json({ message: "Event created", events });
});

app.delete("/api/events/:id", (req, res) => {
  const eventId = Number(req.params.id);
  console.log(eventId);
  const eventList = events.filter((elem) => elem.id !== eventId);

  return res.status(200).json(eventList);
});

const PORT = 8080;

app.listen(PORT, () => {
  //connection to mongo atlas
  connectDB();

  //expressConfig(app)
  //routes(app)

  console.log("Server is running with express");
});
