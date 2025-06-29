
const express = require('express');
const app = express();
const PORT = 3000;

// === Middleware: Logs incoming requests ===
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Continue to the next middleware or route handler
});


app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
