import { yarg } from "./config/plugins/yargs.plugin";
import { MultiplicationProps } from "./interfaces/MultiplicationProps";
import { ServerApp } from "./presentation/server-app";


(async () => {
    await main();
})()

async function main() {
    // Uso de yargs
    const { b, l, s, } = yarg;
    let data: MultiplicationProps = {
        base: b,
        limit: l,
        show: s,
        path: 'outputs/'
    }
    // const { generateTableMultiplication } = await import('./app.logic');
    // generateTableMultiplication(data);

    ServerApp.run(data);
}