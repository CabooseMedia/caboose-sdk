import express from "express";
import { FileManager } from "./managers";
import { EventEmitter } from 'events';
export declare class ServerManager extends EventEmitter {
    private rootDir;
    private contentDir;
    private dataDir;
    private os;
    private managers;
    private scannerManager;
    private fileManager;
    private databaseManager;
    private downloadManager;
    private pluginManager;
    private portManager;
    private routeManager;
    private expressServer;
    constructor();
    startManagers(): Promise<void>;
    startExpressServer(): Promise<void>;
    getRootDir(): string;
    getContentDir(): string;
    getDataDir(): string;
    getOS(): {
        platform: NodeJS.Platform;
        arch: string;
        release: string;
        type: string;
    };
    // getScannerManager(): ScannerManager;
    getFileManager(): FileManager;
    // getDatabaseManager(): DatabaseManager;
    // getDownloadManager(): DownloadManager;
    // getPluginManager(): PluginManager;
    // getPortManager(): PortManager;
    // getRouteManager(): RouteManager;
    getExpressServer(): express.Application;
}
