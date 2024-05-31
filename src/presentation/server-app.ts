import { CreateTable } from "../domain/use-cases/create-table.use-case"
import { MultiplicationProps } from "../interfaces/MultiplicationProps"

export class ServerApp {
    constructor() {
        console.log('ServerApp initialized')
    }

    static run(something: MultiplicationProps) {
        const table = new CreateTable().execute(something)
        if (something.show) console.log(table)
        console.log('Table generated')
    }

}