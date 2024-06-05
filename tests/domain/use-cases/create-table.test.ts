import { CreateTable } from '../../../src/domain/use-cases/create-table.use-case';

describe('CreateTableUseCase', () => {
    test('should create table with default values', () => {
        const createTable = new CreateTable();
        const result = createTable.execute({ base: 2 });
        const rows = result.split('\n').length;

        expect(result).toContain('2 x 1 = 2');
        expect(createTable).toBeInstanceOf(CreateTable);
        expect(rows).toBe(10);
    });

    test('should create table with custom values', () => {
        const options = {
            base: 3,
            limit: 5
        };
        const createTable = new CreateTable();
        const result = createTable.execute(options);
        const rows = result.split('\n').length;
        expect(result).toContain('3 x 1 = 3');
        expect(rows).toBe(options.limit);
    });
})