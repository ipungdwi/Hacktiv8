// const EventEmitter = require("events").EventEmitter;

// class Dog extends EventEmitter {}
// class Food {}
// let myDog = new Dog();

// myDog.on("chew", item => {
//     if (item instanceof Food){
//         console.log("Good Dog");
//     }else{
//         console.log(`Time to buy another ${item}`)
//     }
// })

// myDog.emit("chew", "Shoe");

// const bone = new Food();

// myDog.emit("chew", bone);

const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
var emitter = new MyEmitter();

emitter
.on("message", function(){
    console.log('satu pesan emitter');
})
.on("message", function(){
    console.log('pesan yang kedua, bukan pesan yang benar');
})
.on("data", function(){
    console.log('pesan untuk data');
})

console.log(emitter.eventNames());
emitter.removeAllListeners("data");
console.log(emitter.eventNames());