const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let tasks = []; // In-memory mock DB

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(PORT, () => {
  console.log(`DevBoard server running on http://localhost:${PORT}`);
});
