import * as math from './app'

describe("test cases for basic math functions", () => {
    it("should add 2 numbers", () => {
        const result = math.add(1,2)
        expect(result).toEqual(3)
    })
    it("should sub 2 numbers", () => {
        const result = math.sub(1,2)
        expect(result).toEqual(-1)
    })
    it("should mul 2 numbers", () => {
        const result = math.mul(1,2)
        expect(result).toEqual(2)
    })
})