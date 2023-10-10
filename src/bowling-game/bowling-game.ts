export class BowlingGame {
    totalScore: number
    constructor() {
        this.totalScore = 0
    }
    frame(numberOfPins: string | number): void {
        if (typeof numberOfPins === "string"){
            if (numberOfPins === 'X'){
                this.totalScore += 10
            }
            if (numberOfPins.includes('/')){
                this.totalScore += 10
            }
            if (numberOfPins.includes('-')){
                this.totalScore += Number(numberOfPins.split('-')[0])
            }
        } else {
            this.totalScore += numberOfPins
        }
    }

    score(): number {
        return this.totalScore
    }
}
