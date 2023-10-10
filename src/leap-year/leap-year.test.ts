import { LeapYear } from './leap-year'

const isLeapYear = new LeapYear().isLeapYear
describe('leap year', () => {
    it('should be true if installation work', () => {
        expect(new LeapYear()).not.toBeNull()
    })

    const cases = [
        {year: 2017, res: false}, 
        {year: 2018, res: false},
        {year: 2019, res: false},
        {year: 2012, res: true},
        {year: 2000, res: true},
        {year: 2001, res: false},
        {year: 400, res: true},
        {year: 800, res: true},
        {year: 100, res: false},
        {year: 1700, res: false},
        {year: 2008, res: true},
    ]

    it.each(cases)('%s should return %b', (a) => {
        expect(isLeapYear(a.year)).toBe(a.res)
    })
})