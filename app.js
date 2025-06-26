const EventEmitter = require("events");
const { emit } = require("process");

const Logging = require("./logger");
const { log } = require("console");
const logger = new Logging();
logger.on("message Logged", (arg) => {
  console.log("Logging", arg);
});
logger.log("message");
