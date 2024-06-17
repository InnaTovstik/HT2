import { Days } from './enums';
import { getActivity } from './functions';
import { Queue } from './queue';
import { combine } from './functions';
import { Employee } from './employee';

// Перевірка getActivity
console.log(getActivity(Days.Monday)); // Будь соціально активними
console.log(getActivity(Days.Friday)); // Відпочивай та розважайся, проявляй почуття і благодійність

// Перевірка класу Queue з рядками
const stringQueue = new Queue<string>();
stringQueue.enqueue("Hello");
stringQueue.enqueue("world");
console.log(stringQueue.dequeue()); // виведе - Hello
console.log(stringQueue.dequeue()); // виведе - world

// Перевірка класу Queue з числами
const numberQueue = new Queue<number>();
numberQueue.enqueue(323);
numberQueue.enqueue(456);
console.log(numberQueue.dequeue()); // виведе - 323
console.log(numberQueue.dequeue()); // виведе - 456

// Перевірка функції combine
console.log(combine("Hello, ", "world!")); // Виведе "Hello, world!"
console.log(combine(2, 20));               // Виведе 22
// console.log(combine("Hello", 10));      // Викине помилку

// Перевірка класу Employee
const employee = new Employee("Oleg", 35, "Developer", 2000);
console.log(employee.getSalary()); // Виведе 2000

employee.setSalary(2500);
console.log(employee.getSalary()); // Виведе 2500
