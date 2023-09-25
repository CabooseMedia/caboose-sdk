import { EventEmitter } from 'events';

export class CabooseSDK extends EventEmitter {

    private id: string;

    constructor(config: {
        id: string;
    }) {
        super();
        this.id = config.id;
    }

    public getId(): string {
        return this.id;
    }

}