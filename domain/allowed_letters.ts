export class printLetter {
        letter: {
                lineOne: string;
                lineTwo: string;
                lineThree: string;
                lineFour: string;
                lineFive: string;
        }

        constructor(lineOne: string, lineTwo: string, lineThree: string, lineFour: string, lineFive: string) {
                this.letter = {
                        lineOne: lineOne,
                        lineTwo: lineTwo,
                        lineThree: lineThree,
                        lineFour: lineFour,
                        lineFive: lineFive
                };
        }
}

export class AllowedLetters {
        letters: {
                [key: string]: {
                        allowed: boolean,
                        dottedLetter: printLetter
                }
        } = {};

        starH = new printLetter(
                '*   *',
                '*   *',
                '*****',
                '*   *',
                '*   *',
        )

        starE = new printLetter(
                '*****',
                '*    ',
                '*****',
                '*    ',
                '*****',
        )

        starL = new printLetter(
                '*    ',
                '*    ',
                '*    ',
                '*    ',
                '*****',
        )

        starO = new printLetter(
                ' **** ',
                '*    *',
                '*    *',
                '*    *',
                ' **** ',
        )


        constructor() {
                this.letters = {
                        ['h']: {
                                allowed: true,
                                dottedLetter: this.starH
                        },
                        ['e']: {
                                allowed: true,
                                dottedLetter: this.starE
                        },
                        ['l']: {
                                allowed: true,
                                dottedLetter: this.starL
                        },
                        ['o']: {
                                allowed: true,
                                dottedLetter: this.starO
                        },
                }
        }

        getValue(key: string): any {
                return this.letters[key];
        }
}
