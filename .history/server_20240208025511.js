// const {add,subtract,divide,multiply} = require('./math');


// console.log(add(6,9));
// console.log(subtract(6,9));
// console.log(divide(6,9));
// console.log(multiply(6,9));


const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events');
class Emitter extends EventEmitter { };

