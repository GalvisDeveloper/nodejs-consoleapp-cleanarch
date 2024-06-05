import { CreateTable } from '../../src/domain/use-cases/create-table.use-case';
import { SaveFile } from '../../src/domain/use-cases/save-file.use-case';
import { ServerApp } from '../../src/presentation/server-app';
describe('ServerApp', () => {

    const options = {
        base: 2,
        limit: 10,
        show: false,
        path: 'test-path/',
        name: 'test-table'
    }

    beforeEach(() => {
        jest.restoreAllMocks();
    });

    test('should initialized server app', () => {
        const serverApp = new ServerApp();
        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function')
    })


    // de integracion
    test('should run server app with options', () => {
        const logSpy = jest.spyOn(console, 'log');
        const CreateTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        const SaveFileSpy = jest.spyOn(SaveFile.prototype, 'execute')


        ServerApp.run(options);

        expect(logSpy).toHaveBeenCalledTimes(2);
        expect(logSpy).toHaveBeenCalledWith('Server running');

        expect(CreateTableSpy).toHaveBeenCalledTimes(1);
        expect(CreateTableSpy).toHaveBeenCalledWith(options);

        expect(SaveFileSpy).toHaveBeenCalledTimes(1);
        expect(SaveFileSpy).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            destination: options.path,
            fileName: options.name,
        });
    });

    // atomica
    test('should run server app with custom values mock', () => {
        const logMock = jest.fn();
        const logMockError = jest.fn();
        const createMock = jest.fn().mockReturnValue('2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20');
        const saveFileMock = jest.fn();
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;

        console.log = logMock;
        console.error = logMockError;

        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledTimes(2);
        expect(createMock).toHaveBeenCalledTimes(1);
        expect(createMock).toHaveBeenCalledWith(options);
        expect(saveFileMock).toHaveBeenCalledTimes(1);
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            destination: options.path,
            fileName: options.name,
        });
    });
})