// 1. Enum
// 1.1 Days
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
/*
1.2 Функція getActivity, яка приймає день тижня як аргумент (з використанням enum)
та повертає рекомендовану активність для цього дня
*/
function getActivity(day) {
    switch (day) {
        case Days.Sunday:
            return "Проведи час на природі";
        case Days.Monday:
            return "Будь соціально активними";
        case Days.Tuesday:
            return "Будь фізично активним";
        case Days.Wednesday:
            return "Веди будь-яку діяльність, пов'язану з утворенням";
        case Days.Thursday:
            return "Вирішуй юридичні питання";
        case Days.Friday:
            return "Відпочивай та розважайся, проявляй почуття і благодійність";
        case Days.Saturday:
            return "Зупинися, задумайся, переглянь свої плани";
        default:
            return "Упс, день невідомий)";
    }
}
// 2 Дженерики
// 2.1 Клас Queue<T>
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    return Queue;
}());
// 2.1.1 Перевірка класу Queue (з рядками)
var stringQueue = new Queue();
stringQueue.enqueue("Hello");
stringQueue.enqueue("World");
console.log(stringQueue.dequeue()); // виведе - Hello
console.log(stringQueue.dequeue()); // виведе - World
// 2.1.2 Перевірка класу Queue (з числами)
var numberQueue = new Queue();
numberQueue.enqueue(323);
numberQueue.enqueue(456);
console.log(numberQueue.dequeue()); // виведе - 323
console.log(numberQueue.dequeue()); // виведе - 456
/*
3.1 Функція combine, яка буде комбінувати два значення
(якщо обидва рядки - конкатенує їх, якщо числа - додавати,
в інших випадках видає помилку)
*/
function combine(input1, input2) {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    }
    else if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        var newLocal = "Помилка";
        throw new Error(newLocal);
    }
}
// 3.2 Перевірка функції combine
console.log(combine("Hello, ", "world!")); // Виведе "Hello, world!"
console.log(combine(2, 20)); // Виведе 22
console.log(combine("Hello", 10)); // Викине помилку
// 4.2 Клас Employee
var Employee = /** @class */ (function () {
    function Employee(name, age, position, salary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (newSalary) {
        this.salary = newSalary;
    };
    return Employee;
}());
// 4.3 Перевірка класу Employee
var employee = new Employee("Oleg", 35, "Developer", 2000);
console.log(employee.getSalary()); // Виведе 2000
employee.setSalary(2500);
console.log(employee.getSalary()); // Виведе 2500
