const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();


//Settings
app.set('default_port', 3001);

//Middlewares
app.use(morgan('dev'));
// 

app.use(cors());
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: false}));

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

module.exports = app;