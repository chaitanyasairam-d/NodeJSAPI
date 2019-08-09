const dbUrl = require('./config');
const mongoose = require('mongoose');


mongoose.connect(dbUrl.url, { useNewUrlParser: true });
var connection = mongoose.connection;

connection.on('error', console.log.bind(console, 'Connection Error'));
connection.once('open', () => {
    console.log('Successfully Connected to DB')
});




require('./Routes/routes');
