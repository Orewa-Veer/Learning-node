const EventEmitter = require('events');
const Logging= require('./logger');

    const logger=new Logging;
    logger.on('message Logged', (arg)=>{console.log('Logging',arg);
    })

//Register a listner
logger.log('message')
