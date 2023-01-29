const express = require('express')
const PORT = process.env.PORT || 3001
const routes = require('./routes');
// const notesHTML = require('./public/notes.html');

const app = express();
//Setting up middleware and routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);

//starting up server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


