import {AllowedLetters} from '../../domain/allowed_letters';

const allowed = new AllowedLetters

export function validateLetter(s: string): string[] {
        let wrongLetters: string[] = []
        const letters: string[] = [...s];
        letters.forEach(letter => {
                if (!allowed.getValue(letter)) {
                        wrongLetters.push(letter)
                }
        })
        return wrongLetters
}