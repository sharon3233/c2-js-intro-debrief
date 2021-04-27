/*let myNumber = 55;
if (typeof myNumber !== 'number') {
console.log('This is not a number');
}else if (myNumber /= 3) {
console.log('Gen');
} else if (myNumber /= 5) {
console.log('Buzz');
} else if (myNumber /= 3 && 5) {
console.log('GenBuzz');
} else {
console.log(myNumber);
}*/

/*let storeItem = 'shoes';
switch (storeItem) {
case 'shoes':
console.log('shoes are $50');
break;
case 'jeans':
console.log('jeans are $25');
break;
case 'hat':
console.log('hat are $12');
break;
case 'socks':
console.log('socks are $2');
break;
default:
console.log('invalid Item');
}*/

let min = 50;
let max = 100;
console.log(Math.floor(Math.random()* (max-min) + min));
