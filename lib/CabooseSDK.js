"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CabooseSDK = void 0;
const events_1 = require("events");
class CabooseSDK extends events_1.EventEmitter {
    constructor(serverManager) {
        super();
        this.serverManager = serverManager;
        this.initialize();
        this.emit('initialized');
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.onStart();
            this.emit('ready');
        });
    }
    initialize() {
        // Override this method
    }
    onStart() {
        return __awaiter(this, void 0, void 0, function* () {
            // Override this method
        });
    }
}
exports.CabooseSDK = CabooseSDK;
