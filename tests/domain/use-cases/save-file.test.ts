import { SaveFile } from '../../../src/domain/use-cases/save-file.use-case';
import fs from 'fs';


describe('SaveFileUseCase', () => {

    beforeEach(() => {
        const filePath = 'outputs/table.txt';
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
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

    });
    // test('should save file with default values', () => {

    // });
})