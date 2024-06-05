
// process.argv = ['node', 'app', '--base', '2'];
// import '../src/app'

import { ServerApp } from "../src/presentation/server-app";

describe('App', () => {
    test('should initialized app', async () => {
        const serverRunMock = jest.fn();
        ServerApp.run = serverRunMock;
        process.argv = ['node', 'app', '--base', '2'];
        await import('../src/app');
        expect(serverRunMock).toHaveBeenCalledTimes(1);
        expect(serverRunMock).toHaveBeenCalledWith({ base: 2, limit: 10, show: false, path: 'outputs/', name: 'table' });
    })
});