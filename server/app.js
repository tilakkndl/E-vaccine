const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const registerRoute = require("./routes/registerRoute")


const app = express();

//Handle CORS
// app.use(cors(path: "http://127.0.0.1:5500/"));
app.use(cors({origin: "http://127.0.0.1:5500"}))

//Handle JSON
app.use(express.json());

//Handle logging
app.use(morgan('dev'));

//testing server
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/api/v1", registerRoute)

module.exports = app;
