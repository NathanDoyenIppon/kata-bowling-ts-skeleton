import {BowlingGame} from './bowling-game'

describe('bowling line', () => {
    it('should be true if installation work', () => {
        expect(new BowlingGame()).not.toBeNull()
    })
    it('score should return 0 at the beginning of the line', () => {
        const line = new BowlingGame()

        expect(line.score()).toEqual(0)
    })
    it('score should be total of the first frame', () => {
        const line = new BowlingGame()

        line.frame(3)

        expect(line.score()).toEqual(3)
    })
    it('score should be total of 10 if first frame is strike', () => {
        const line = new BowlingGame()

        line.frame('X')

        expect(line.score()).toEqual(10)
    })
    it('score should be total of 10 if first frame is spare', () => {
        const line = new BowlingGame()

        line.frame('7/')

        expect(line.score()).toEqual(10)
    })
    it('score should add the number of pins touched', () => {
        const line = new BowlingGame()

        line.frame('5-')

        expect(line.score()).toEqual(5)
    })
    it('score should remain the sameif no pins are touched', () => {
        const line = new BowlingGame()

        line.frame('5-')
        line.frame('--')

        expect(line.score()).toEqual(5)
    })
})
