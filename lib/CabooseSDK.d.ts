/// <reference types="node" />
import { EventEmitter } from 'events';
export declare class CabooseSDK extends EventEmitter {
    private id;
    constructor(config: {
        id: string;
    });
    getId(): string;
}
