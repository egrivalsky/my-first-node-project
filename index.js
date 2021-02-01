const myModule = require('./myModule');
const myOtherModule = require('./myOtherModule');
const myThirdModule = require('./myThirdModule');
console.log('Hello world');

function hello(name) {
    console.log(`Hello, ${name}`);
}

hello('Erik');
hello('world');

console.log(myModule.add(14, 28));
console.log(myModule.subtract(75, 33));
myOtherModule.welcomeToNode();

myThirdModule.repeatHello(3);