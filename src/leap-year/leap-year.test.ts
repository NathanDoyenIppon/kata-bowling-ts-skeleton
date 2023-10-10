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
    it('should return true for 400', () => {
        const year = 400
        expect(isLeapYear(year)).toBe(true)
    })
    it('should return true for 800', () => {
        const year = 800
        expect(isLeapYear(year)).toBe(true)
    })
    it('should return false for 100', () => {
        const year = 100
        expect(isLeapYear(year)).toBe(false)
    })
    it('should return false for 1700', () => {
        const year = 1700
        expect(isLeapYear(year)).toBe(false)
    })
    it('should return false for 2008', () => {
        const year = 2008
        expect(isLeapYear(year)).toBe(true)
    })
    it('should return false for 2008', () => {
        const year = 2008
        expect(isLeapYear(year)).toBe(true)
    })
    it('should return false for 2012', () => {
        const year = 2012
        expect(isLeapYear(year)).toBe(true)
    })
    it('should return false for 2017', () => {
        const year = 2017
        expect(isLeapYear(year)).toBe(false)
    })
    it('should return false for 2018', () => {
        const year = 2018
        expect(isLeapYear(year)).toBe(false)
    })

    const cases = [
        {year: 2017, res: false}, 
        {year: 2018, res: false},
        {year: 2019, res: false},
        {year: 2012, res: true},
    ]

    it.each(cases)('%s should return %b', (a) => {
        expect(isLeapYear(a.year)).toBe(a.res)
    })
})
