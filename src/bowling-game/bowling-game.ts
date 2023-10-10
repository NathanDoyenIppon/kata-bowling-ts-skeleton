export class BowlingGame {
    totalScore: number
    coefRow1: number
    coefRow2: number
    constructor() {
        this.totalScore = 0
        this.coefRow1 = 1
        this.coefRow2 = 1
    }
    initializeSpareAndStrike() {
        this.coefRow1 = 1
        this.coefRow2 = 1
    }

    frame(numberOfPins: string): void {
        const [roll1, roll2] = numberOfPins.replace(/-/g, '0')
        if (this.isStrike(numberOfPins)) {
            this.totalScore += 10 * this.coefRow1
            this.setStrike();
            return
        }
        if (this.isSpare(numberOfPins)) {
            this.totalScore += Number(roll1) * this.coefRow1 + (10 - Number(roll1)) * this.coefRow2
            this.setSpare();
            return
        }
            this.totalScore += Number(roll1) * this.coefRow1 + Number(roll2) * this.coefRow2
            this.initializeSpareAndStrike()
            return
    }

    private setSpare() {
        this.coefRow1 = 2
        this.coefRow2 = 1
    }

    private setStrike() {
        this.coefRow1 = 2
        this.coefRow2 = 2
    }

    private isSpare(numberOfPins: string) {
        return numberOfPins.includes('/');
    }

    private isStrike(numberOfPins: string) {
        return numberOfPins === 'X';
    }

    score(): number {
        return this.totalScore
    }
}
