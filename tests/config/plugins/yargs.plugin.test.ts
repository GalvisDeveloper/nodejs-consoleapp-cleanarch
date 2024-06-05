

const runCommand = async (args: string[]) => {
    process.argv = [...process.argv, ...args];
    const { yarg } = await import('./../../../src/config/plugins/yargs.plugin');
    return yarg;
}


describe('YargsPlugin', () => {
    const originalArgv = process.argv;

    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    })

    test('should return an object with default values', async () => {
        const yarg = await runCommand(['--base', '2']);
        expect(yarg).toEqual(expect.objectContaining({
            base: 2,
            limit: 10,
            show: false,
            name: 'table',
            path: 'outputs/'
        }));
    });

    test('should return an object with custom values', async () => {
        const yarg = await runCommand(['--base', '2', '-s', '-l', '10', '-n', 'gersoncachon', '-p', 'prueba/']);
        expect(yarg).toEqual(expect.objectContaining({
            base: 2,
            limit: 10,
            show: true,
            name: 'gersoncachon',
            path: 'prueba/'
        }));
    });

});