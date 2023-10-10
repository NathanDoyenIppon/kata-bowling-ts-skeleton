import { LeapYear } from './leap-year'

const isLeapYear = new LeapYear().isLeapYear
describe('leap year', () => {
    it('should be true if installation work', () => {
        expect(new LeapYear()).not.toBeNull()
    })
    it('should return true for 2000', () => {
        const year = 2000
        expect(isLeapYear(year)).toBe(true)
    })
    it('should return true for 2001', () => {
        const year = 2001
        expect(isLeapYear(year)).toBe(false)
    })
    it('should return true for numbers divisible by 400', () => {
        for (let year = 0; year < 2023; year = +400) {
            // Si divisible par 400
            const isLeap = isLeapYear(year)
            if (year % 400 === 0) {
                expect(isLeap).toBe(true)
            } else {
                expect(isLeap).toBe(false)
            }
        }
    })
})
