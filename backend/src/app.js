const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();


//Settings
app.set('default_port', 3000);

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: false}));

//main root to serve webapp frontend

app.get('/api/', (req, res) => {
    res.send(`Version 0.0.1`);
});

//routes
app.use('/api/users', require('./routes/UsersRoute'));

module.exports = app;