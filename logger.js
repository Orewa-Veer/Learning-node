var url ='http://mylogger.io/log';
const EventEmitter =require('events');
class Logging extends EventEmitter{

 log (message){
    //sending the http request
    console.log(message);
    //Raise an event
this.emit('message Logged',{id:1,url:'https://yonko'})
    
}
}
module.exports=Logging;