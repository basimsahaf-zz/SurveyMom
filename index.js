/* Constants */
const express = require('express');
require('./services/passport.js');


const app = express();

require('./routes/authRoutes')(app);


//Environment variable injected by Heroku, uses port 5000 if environment variable is missing
/* =====================================================================*/
const PORT = process.env.PORT || 5000;
/* =====================================================================*/


//Express directs Node to listen to PORT
app.listen(PORT);
