import { log } from 'console';
import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string;
    destination?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor() {
        /** 
         * repository : StorageRepository
         */
    }

    execute({ fileContent, destination = 'outputs', fileName = 'table.txt' }: Options): boolean {

        try {
            let path = `${destination}/`;
            fs.mkdirSync(path, { recursive: true });
            fs.writeFileSync(`${path}${fileName}.txt`, fileContent);
            log(`The file has been saved!`);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }

    }

}