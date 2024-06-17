"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combine = exports.getActivity = void 0;
var enums_1 = require("./enums");
function getActivity(day) {
    switch (day) {
        case enums_1.Days.Sunday:
            return "Проведи час на природі";
        case enums_1.Days.Monday:
            return "Будь соціально активними";
        case enums_1.Days.Tuesday:
            return "Будь фізично активним";
        case enums_1.Days.Wednesday:
            return "Веди будь-яку діяльність, пов'язану з утворенням";
        case enums_1.Days.Thursday:
            return "Вирішуй юридичні питання";
        case enums_1.Days.Friday:
            return "Відпочивай та розважайся, проявляй почуття і благодійність";
        case enums_1.Days.Saturday:
            return "Зупинись, задумайся, переглянь свої плани";
        default:
            return "Упс, день невідомий)";
    }
}
exports.getActivity = getActivity;
function combine(input1, input2) {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    }
    else if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        throw new Error("Помилка: обидва значення повинні бути або рядками, або числами");
    }
}
exports.combine = combine;
