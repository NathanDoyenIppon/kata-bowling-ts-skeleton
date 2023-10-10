import { LeapYear } from './leap-year'

describe('leap year', () => {
    it('should be true if installation work', () => {
        expect(new LeapYear()).not.toBeNull()
    })
})
