const EventEmitter = require('node:events') // var name is a class name in events;
const emitter = new EventEmitter();

emitter.on("willplay", (what, when) => {
    console.log(`Will play ${what} at ${when}`);
})
console.log("Event yet to emit")
emitter.emit("willplay","cricket","evening")
    
