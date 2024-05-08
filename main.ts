import * as readline from 'readline';
import {validateLetter} from './src/validation/validator';
import {printDotWord} from './src/printer/print';

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

function waitForInput() {
        rl.question('Введите что-нибудь: ', (input) => {
                let invalidLetters = validateLetter(input)
                if (input === "exit") {
                        rl.close();
                        process.exit(0);
                }
                if (invalidLetters.length) {
                        console.log(`Введены невалидные символы ${invalidLetters} \n`)
                } else {
                        console.log("\n")
                        printDotWord(input)
                        console.log("\n")
                }
                waitForInput();
        });
};

waitForInput();
