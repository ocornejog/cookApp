const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();


//Settings
app.set('default_port', 3001);

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: false}));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

//main root to serve webapp frontend
app.get('/api', (req, res) => {
    res.send(`Version 0.0.1`);
});

//routes
app.use('/api/users', require('./routes/UsersRoute'));
app.use('/api/recipes', require('./routes/RecipesRoute'));
app.use('/api/appRecipes', require('./routes/AppRecipesRoute'));
app.use('/api/comments', require('./routes/CommentsRoute'));
app.use('/api/favoritesRecipes', require('./routes/FavoritesRecipesRoute'));
app.use('/api/email', require('./routes/EmailRoute'));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

module.exports = app;