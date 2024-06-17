import { Days } from './enums';

export function getActivity(day: Days): string {
    switch(day) {
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
            return "Зупинись, задумайся, переглянь свої плани";
        default:
            return "Упс, день невідомий)";
    }
}

export type StringOrNumber = string | number;

export function combine(input1: StringOrNumber, input2: StringOrNumber): StringOrNumber {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    } else if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    } else {
        throw new Error("Помилка: обидва значення повинні бути або рядками, або числами");
    }
}
