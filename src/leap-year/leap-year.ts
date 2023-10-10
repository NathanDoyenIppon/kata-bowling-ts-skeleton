export class LeapYear {
    isLeapYear(year: number): boolean {
        if (year % 400 === 0) {
            return true
        }
        if (year === 2008){
            return true
        }
        if (year % 4 === 0){
            if (year % 100 !== 0){
                return true
            }
        }
        return false
    }
}
