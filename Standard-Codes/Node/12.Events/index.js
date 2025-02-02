import EventEmitter from "events";

const customEventEmitter = new EventEmitter();
customEventEmitter.on("response", (name, id) => {
    console.log(`(first emitter)user: ${name} id: ${id}`);  
});

customEventEmitter.emit("response", "dishant", "007");
customEventEmitter.emit("response", "john", "008");
customEventEmitter.emit("response", "me", "0");


const customEventEmitter2 = new EventEmitter();
customEventEmitter2.once("response", (name, id) => {
  console.log(`(second emitter) user: ${name} id: ${id}`);
});

customEventEmitter2.emit("response", "dishant", "007");
customEventEmitter2.emit("response", "john", "008");
customEventEmitter2.emit("response", "me", "0");