const express = require('express');
const partyRouter = express.Router();
const {
    httpAddParty,
    httpGetAllParties,
    httpGetParty,
    httpDeleteParty
} = require('./party.controller')

partyRouter.get('/',httpGetAllParties);
partyRouter.post('/',httpAddParty);
partyRouter.get('/:id',httpGetParty);
partyRouter.delete('/',httpDeleteParty);

module.exports = partyRouter;