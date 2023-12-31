/// <reference types="node" />
import { EventEmitter } from 'events';
import { ServerManager } from './managers/managers';
export declare class CabooseSDK extends EventEmitter {
    protected serverManager: ServerManager;
    constructor(serverManager: ServerManager);
    start(): Promise<void>;
    initialize(): void;
    onStart(): Promise<void>;
}
