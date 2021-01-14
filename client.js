const net = require('net');
const { IP, PORT } = require('./constants');


const connect = function() {
  const conn = net.createConnection({ 
    host: IP, 
    port: PORT
  });

  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });

  conn.on('connect', () => {
    conn.write('Name: BMV');
  });

  setTimeout(() => {
    conn.write('Say: Go!');
  }, 2000);
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
    
  });
  
  return conn;
}

module.exports = {
  connect
};