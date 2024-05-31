"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const generateTableMultiplication = (number, long, path) => {
    let data = '';
    for (let i = 1; i <= long; i++) {
        data += `${number} x ${i} = ${number * i}\n`;
    }
    const start = Date.now();
    path = path ? path : 'outputs/';
    fs_1.default.mkdirSync(path, { recursive: true });
    fs_1.default.writeFileSync(`${path}table-${number}.txt`, data);
    const end = Date.now();
    const duration = end - start;
    console.log(`The file has been saved! It took ${duration} seconds.`);
};
generateTableMultiplication(5, 1000, 'outputs/');
