import { CabooseManager } from "./managers";
export declare class FileManager extends CabooseManager {
    onStart(): Promise<void>;
    getDirectoryContents(directoryPath: string): {
        name: string;
        path: string;
        isDirectory: boolean;
        size: number;
        createdAt: Date;
        updatedAt: Date;
        accessedAt: Date;
        extension: string;
        isHidden: boolean;
    }[];
}
