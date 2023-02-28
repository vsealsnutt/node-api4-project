require('dotenv').config();
const express = require('express');
const cors = require('cors');

const server = express();

const PORT = process.env.PORT || 9000;

server.use(express.json());
server.use(cors());

server.get('/api/users', (req, res, next) => {
    
});

server.post('/api/register', (req, res, next) => {

});

server.post('/api/login', (req, res, next) => {

});

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
});

console.log(process.env.PORT, process.env.NODE_ENV);