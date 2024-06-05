import { SaveFile } from '../../../src/domain/use-cases/save-file.use-case';
import fs from 'fs';

describe('SaveFileUseCase', () => {

    const options = {
        fileContent: 'custom test',
        destination: 'custom-outputs',
        fileName: 'custom-file'
    }

    afterEach(() => {
        if (fs.existsSync('outputs/')) {
            fs.rmdirSync('outputs/', { recursive: true });
        }
        if (fs.existsSync('custom-outputs/')) {
            fs.rmdirSync('custom-outputs/', { recursive: true });
        }
        jest.restoreAllMocks();
    });

    test('should save file with default values', () => {
        const options = {
            fileContent: 'test'
        }
        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';

        const result = saveFile.execute(options);
        expect(result).toBe(true);

        const existFile = fs.existsSync(filePath);
        const checkFile = fs.readFileSync(filePath, 'utf8');
        expect(existFile).toBe(true);
        expect(checkFile).toBe(options.fileContent);
    });

    test('should save file with custom values', () => {
        const saveFile = new SaveFile();
        const filePath = `${options.destination}/${options.fileName}.txt`;

        const result = saveFile.execute(options);
        expect(result).toBe(true);

        const existFile = fs.existsSync(filePath);
        const checkFile = fs.readFileSync(filePath, 'utf8');
        expect(existFile).toBe(true);
        expect(checkFile).toBe(options.fileContent);
    });

    test('should return false when an error occurs', () => {
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => { throw new Error('Custom error message') });

        const saveFile = new SaveFile();
        const result = saveFile.execute(options);
        expect(result).toBe(false);

        expect(mkdirSpy).toHaveBeenCalled();
    });
})