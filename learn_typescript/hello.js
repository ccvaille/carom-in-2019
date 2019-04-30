var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sayHello(person) {
    return "Hello, " + person;
}
var user = 'ttt';
console.log(sayHello(user));
// let createdByNewBoolean: boolean = new Boolean(1);
// console.log(createdByNewBoolean)
var anyThing = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
var tom = {
    id: 1,
    name: 'Tom',
    gender: 'male'
};
var fibonacci = [1, 1, 3, 3, 5];
console.log(fibonacci);
var mySum = function (x, y) {
    return x + y;
};
var xcatliu = [1, 'Xcat Liu'];
// class
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sayHi = function () {
        console.log("Meow, My name is " + this.name);
    };
    return Cat;
}(Animal));
var cat = new Cat('Tom');
