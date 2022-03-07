import * as math from './app'

describe("test cases for basic math functions", () => {
    it("should add 2 numbers", () => {
        const result = math.add(1,2)
        expect(result).toEqual(3)
    })
})