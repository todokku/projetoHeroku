// db.js
const { Pool, Client } = require('pg');

module.exports = function(){
    client = new Pool({
        host:'ec2-52-70-15-120.compute-1.amazonaws.com',
        user:'yksslihsytfwzt',
        password:'5aa55d331bd064f6e865f6334135ace824bca1d04e8304bc6f6836b3d64a9ef1',
        database:'dcnh2h8ub457o6'
    });
    return client.connect();
}
