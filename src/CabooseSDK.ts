import { EventEmitter } from 'events';

import { ServerManager } from './managers/managers';

export class CabooseSDK extends EventEmitter {

    protected serverManager: ServerManager;

    constructor(serverManager: ServerManager) {
        super();
        this.serverManager = serverManager;
        
        this.initialize();

        this.emit('initialized');
    }

    public async start(): Promise<void> {
        await this.onStart();

        this.emit('ready');
    }

    public initialize(): void {
        // Override this method
    }

    public async onStart(): Promise<void> {
        // Override this method
    }

}