

// 2 Дженерики
// 2.1 Клас Queue<T>
class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }
}

// 2.1.1 Перевірка класу Queue (з рядками)
const stringQueue = new Queue<string>();

stringQueue.enqueue("Hello");
stringQueue.enqueue("World");

console.log(stringQueue.dequeue()); // виведе - Hello
console.log(stringQueue.dequeue()); // виведе - World

// 2.1.2 Перевірка класу Queue (з числами)
const numberQueue = new Queue<number>();

numberQueue.enqueue(323);
numberQueue.enqueue(456);

console.log(numberQueue.dequeue()); // виведе - 323
console.log(numberQueue.dequeue()); // виведе - 456

// 3 Type alias StringOrNumber
type StringOrNumber = string | number;

/* 
3.1 Функція combine, яка буде комбінувати два значення 
(якщо обидва рядки - конкатенує їх, якщо числа - додавати, 
в інших випадках видає помилку)
*/

function combine(input1: StringOrNumber, input2: StringOrNumber): StringOrNumber {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    } else if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    } else {
        const newLocal = "Помилка";
        throw new Error(newLocal);
    }
}

// 3.2 Перевірка функції combine
console.log(combine("Hello, ", "world!")); // Виведе "Hello, world!"
console.log(combine(2, 20));               // Виведе 22
console.log(combine("Hello", 10));         // Викине помилку

// 4 Розширені можливості інтерфейсів
// 4.1 Інтерфейси IPerson та IWorker
interface IPerson {
    name: string;
    age: number;
}

interface IWorker extends IPerson {
    position: string;
    salary: number;
}

// 4.2 Клас Employee
class Employee implements IWorker {
    name: string;
    age: number;
    position: string;
    salary: number;

    constructor(name: string, age: number, position: string, salary: number) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(newSalary: number): void {
        this.salary = newSalary;
    }
}

// 4.3 Перевірка класу Employee
const employee = new Employee("Oleg", 35, "Developer", 2000);
console.log(employee.getSalary()); // Виведе 2000

employee.setSalary(2500);
console.log(employee.getSalary()); // Виведе 2500
