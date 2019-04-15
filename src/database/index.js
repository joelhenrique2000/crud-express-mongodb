const connect = require('./mongo-connect');

module.exports = (next) => {
    console.log('Init database module');

    connect();
    next();
}