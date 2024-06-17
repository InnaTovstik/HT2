"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
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
exports.Queue = Queue;
