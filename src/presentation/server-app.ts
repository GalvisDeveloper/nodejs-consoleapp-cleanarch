import { MultiplicationProps } from "../interfaces/MultiplicationProps"

export class ServerApp {
    constructor() {
        console.log('ServerApp initialized')
    }

    static run(something: MultiplicationProps) {
        console.log(something)
    }

    static stop() {
        console.log('ServerApp stopped')
    }

    static restart() {
        console.log('ServerApp restarted')
    }
}