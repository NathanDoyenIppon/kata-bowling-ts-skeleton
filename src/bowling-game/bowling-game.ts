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
        if (numberOfPins === 'X') {
            this.totalScore += 10
            return
        }
        if (numberOfPins.includes('/')) {
            this.totalScore += 10
            this.coefRow1 = 2
            return
        }
        if (numberOfPins.includes('-')) {
            this.totalScore +=
                Number(numberOfPins.split('-')[0]) * this.coefRow1 +
                Number(numberOfPins.split('-')[1])
            this.initializeSpareAndStrike()
            return
        }
        let [roll1, roll2] = numberOfPins
        this.totalScore += Number(roll1) * this.coefRow1 + Number(roll2)
    }

    score(): number {
        return this.totalScore
    }
}
