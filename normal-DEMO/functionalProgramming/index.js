const r = require('ramda');
const { List } = require('immutable');

// ramda 纯函数
const hello = t => `Hello ${t}`;
const sign = t => `${t}!`;

let greet = r.pipe(hello, sign);
const result = greet('coolfe');
console.log(result);

// immutable
const rooms  = [`room1`, `room2`, `room3`];
// 1 
const roomsList = rooms.map(i => {
    return i === `room3` ? `room4` : i
})
console.log(rooms, roomsList); // [ 'room1', 'room2', 'room3' ] [ 'room1', 'room2', 'room4' ]
// 2
const immutableRoomsList = List(rooms);
const newImmutableRoomsList = immutableRoomsList.set(2,'room4');
console.log(immutableRoomsList.toArray(), newImmutableRoomsList.toArray()); // [ 'room1', 'room2', 'room3' ] [ 'room1', 'room2', 'room4' ]


// 不要迭代要递归
// bad
let sum = num => {
    let total = 0;
    for(let i = 0; i< num.length; i++) {
        total += num[i];
    }
    return total;
}

console.log(sum([1, 2, 3, 4]));

// better
let newSum = num => {
    if(num.length == 1) {
        return num[0]
    }
    return num[0] + newSum(num.slice(1))
}
console.log(newSum([1, 2, 3, 4]));


// curry
const add = x => y => x + y;
const addTen = add(10);

console.log(addTen(6)); // 16


// ramda curry
const curriedAdd = r.curry(add)
const addSix = curriedAdd(6)

console.log(addSix(10)); // 16