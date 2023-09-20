// const EventEmitter = require('events');

// const eventEmitter = new EventEmitter();



// eventEmitter.on('start', () => {
//     console.log('started');
//   });
  
// d
// eventEmitter.emit('start');

// const EventEmitter = require('events');

// const eventEmitter = new EventEmitter();



// eventEmitter.on('start', () => {
//     console.log('started');
//   });
  
// d
// eventEmitter.emit('start');

// const EventEmitter = require('events');

// const eventEmitter = new EventEmitter();



// eventEmitter.on('start', () => {
//     console.log('started');
//   });
  
// d
// eventEmitter.emit('start');




const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('hello world')
  })


app.listen('3000', ()=>{
    console.log("server running on port 3000")
})