import { IWorker } from './interfaces';

export class Employee implements IWorker {
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
