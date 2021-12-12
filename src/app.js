const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const partyRouter = require('../Routes/partyRouter/party.router');

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.use('/party',partyRouter);

module.exports=app;