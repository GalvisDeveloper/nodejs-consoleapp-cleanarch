import { CreateTable } from "../domain/use-cases/create-table.use-case"
import { SaveFile } from "../domain/use-cases/save-file.use-case"
import { MultiplicationProps } from "../interfaces/MultiplicationProps"

export class ServerApp {
    constructor() {
        console.log('ServerApp initialized')
    }

    static run(something: MultiplicationProps) {
        const table = new CreateTable().execute(something)
        if (something.show) console.log(table)
        console.log(something)
        new SaveFile().execute({ fileContent: table, destination: something.path, fileName: something.name })

    }

}