/// <reference types="node" />
import { EventEmitter } from 'events';
import { ServerManager } from './managers';
export declare class CabooseManager extends EventEmitter {
    protected serverManager: ServerManager;
    constructor(serverManager: ServerManager);
    start(): Promise<void>;
    initialize(): void;
    onStart(): Promise<void>;
}
