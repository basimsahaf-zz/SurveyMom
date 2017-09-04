/* Constants */
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./services/passport.js');


mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);


//Environment variable injected by Heroku, uses port 5000 if environment variable is missing
/* =====================================================================*/
const PORT = process.env.PORT || 5000;
/* =====================================================================*/


//Express directs Node to listen to PORT
app.listen(PORT);
