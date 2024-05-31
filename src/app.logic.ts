
import fs from "fs";
import { MultiplicationProps } from "./interfaces/MultiplicationProps";


export const generateTableMultiplication = ({ base, limit, path, show }: MultiplicationProps) => {
    try {
        let data = '';
        for (let i = 1; i <= limit; i++) {
            data += `${base} x ${i} = ${base * i}\n`
        }
        const start = Date.now();

        path = path ? path : 'outputs/';
        fs.mkdirSync(path, { recursive: true });
        fs.writeFileSync(`${path}table-${base}.txt`, data);

        const end = Date.now();
        const duration = end - start;
        if (show) console.log(data)

        console.log(`The file has been saved! It took ${duration} seconds.`);
    } catch (error) {
        console.error(error)
    }

}

// generateTableMultiplication(5, 1000, 'outputs/')