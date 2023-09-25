"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CabooseSDK = void 0;
const events_1 = require("events");
class CabooseSDK extends events_1.EventEmitter {
    constructor(config) {
        super();
        this.id = config.id;
    }
    getId() {
        return this.id;
    }
}
exports.CabooseSDK = CabooseSDK;
