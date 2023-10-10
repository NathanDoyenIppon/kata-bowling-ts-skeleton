import { BowlingGame } from './bowling-game'

describe('bowling game', () => {
    it('should be true if installation work', () => {
        expect(new BowlingGame()).not.toBeNull()
    })
})
