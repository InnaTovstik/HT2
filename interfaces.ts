interface IPerson {
    name: string;
    age: number;
}

export interface IWorker extends IPerson {
    position: string;
    salary: number;
}
