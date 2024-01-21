const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Set up views
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
const mainController = require('./controllers/mainController');
app.use('/', mainController);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
