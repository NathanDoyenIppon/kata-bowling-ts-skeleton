import { BowlingGame } from './bowling-game'

describe('bowling line', () => {
    it('should be true if installation work', () => {
        expect(new BowlingGame()).not.toBeNull()
    })
    it('score should return 0 at the beginning of the line', () => {
        const line = new BowlingGame()
        for (let frame = 1; frame <= 10; frame++) {
            line.frame('--')
        }
        expect(line.score()).toEqual(0)
    })
    it('score should be total of the first frame', () => {
        const line = new BowlingGame()

        line.frame('21')
        for (let frame = 2; frame <= 10; frame++) {
            line.frame('--')
        }
        expect(line.score()).toEqual(3)
    })
    it('score should be total of 10 if first frame is strike', () => {
        const line = new BowlingGame()

        line.frame('X')
        for (let frame = 2; frame <= 10; frame++) {
            line.frame('--')
        }
        expect(line.score()).toEqual(10)
    })
    it('score should be total of 10 if first frame is spare', () => {
        const line = new BowlingGame()

        line.frame('7/')
        for (let frame = 2; frame <= 10; frame++) {
            line.frame('--')
        }
        expect(line.score()).toEqual(10)
    })
    it('score should add the number of pins touched', () => {
        const line = new BowlingGame()

        line.frame('5-')
        for (let frame = 2; frame <= 10; frame++) {
            line.frame('--')
        }
        expect(line.score()).toEqual(5)
    })
    it('score should remain the sameif no pins are touched', () => {
        const line = new BowlingGame()

        line.frame('5-')
        line.frame('--')
        for (let frame = 3; frame <= 10; frame++) {
            line.frame('--')
        }
        expect(line.score()).toEqual(5)
    })
    it('should double score if spare before', () => {
        const line = new BowlingGame()
        // score = 10
        line.frame('4/')

        // score = 10
        line.frame('5-')

        // tot prochains lancers: 40
        for (let frame = 3; frame <= 10; frame++) {
            line.frame('5-')
        }
        expect(line.score()).toEqual(60)
    })

    it('should double score if strike before', () => {
        const line = new BowlingGame()
        // score = 10
        line.frame('X')

        // score = 18
        line.frame('36')

        // tot prochains lancers: 40
        for (let frame = 3; frame <= 10; frame++) {
            line.frame('5-')
        }
        expect(line.score()).toEqual(68)
    })

    it('should double score if spare then strike', () => {
        const line = new BowlingGame()
        // score = 10
        line.frame('3/')

        // score = 20
        line.frame('X')

        // tot prochains lancers: 45
        for (let frame = 3; frame <= 10; frame++) {
            line.frame('5-')
        }
        expect(line.score()).toEqual(75)
    })

    it('should double score if strike then spare', () => {
        const line = new BowlingGame()
        // score = 10
        line.frame('X')

        // score = 20
        line.frame('3/')

        // tot prochains lancers: 45
        for (let frame = 3; frame <= 10; frame++) {
            line.frame('5-')
        }
        expect(line.score()).toEqual(75)
    })

    it('should double score if spare then spare', () => {
        const line = new BowlingGame()
        // score = 10
        line.frame('4/')

        // score = 13
        line.frame('3/')

        // tot prochains lancers: 45
        for (let frame = 3; frame <= 10; frame++) {
            line.frame('5-')
        }
        expect(line.score()).toEqual(68)
    })
})
