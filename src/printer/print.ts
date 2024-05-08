import {AllowedLetters, printLetter} from "../../domain/allowed_letters";

export function printDotWord(word: string) {
        const allowedLetters = new AllowedLetters
        let output = new printLetter('', '', '', '', '')


        const letters: string[] = [...word];

        letters.forEach(letter => {
                let addToOutput = allowedLetters.getValue(letter)
                output.letter.lineOne = output.letter.lineOne.concat(addToOutput.dottedLetter.letter.lineOne, " ")
                output.letter.lineTwo = output.letter.lineTwo.concat(addToOutput.dottedLetter.letter.lineTwo, " ")
                output.letter.lineThree = output.letter.lineThree.concat(addToOutput.dottedLetter.letter.lineThree, " ")
                output.letter.lineFour = output.letter.lineFour.concat(addToOutput.dottedLetter.letter.lineFour, " ")
                output.letter.lineFive = output.letter.lineFive.concat(addToOutput.dottedLetter.letter.lineFive, " ")
        })

        let outputStrings = Object.values(output.letter)

        outputStrings.forEach(element => {
                console.log(element)
        });
}
