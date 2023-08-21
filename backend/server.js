const express = require('express');
const app = express();
const PORT = process.env.PORT || 5005;

app.get('/', (req, res) => {
  res.send('Backend is up and running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
