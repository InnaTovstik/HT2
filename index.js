"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var functions_1 = require("./functions");
var queue_1 = require("./queue");
var functions_2 = require("./functions");
var employee_1 = require("./employee");
// Перевірка getActivity
console.log((0, functions_1.getActivity)(enums_1.Days.Monday)); // Будь соціально активними
console.log((0, functions_1.getActivity)(enums_1.Days.Friday)); // Відпочивай та розважайся, проявляй почуття і благодійність
// Перевірка класу Queue з рядками
var stringQueue = new queue_1.Queue();
stringQueue.enqueue("Hello");
stringQueue.enqueue("world");
console.log(stringQueue.dequeue()); // виведе - Hello
console.log(stringQueue.dequeue()); // виведе - world
// Перевірка класу Queue з числами
var numberQueue = new queue_1.Queue();
numberQueue.enqueue(323);
numberQueue.enqueue(456);
console.log(numberQueue.dequeue()); // виведе - 323
console.log(numberQueue.dequeue()); // виведе - 456
// Перевірка функції combine
console.log((0, functions_2.combine)("Hello, ", "world!")); // Виведе "Hello, world!"
console.log((0, functions_2.combine)(2, 20)); // Виведе 22
// console.log(combine("Hello", 10));      // Викине помилку
// Перевірка класу Employee
var employee = new employee_1.Employee("Oleg", 35, "Developer", 2000);
console.log(employee.getSalary()); // Виведе 2000
employee.setSalary(2500);
console.log(employee.getSalary()); // Виведе 2500
