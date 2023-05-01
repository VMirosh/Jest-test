const square = require("./square");
describe('squareValidation', () => {



    // Викликаеться  функції перед кожним тестом
    beforeEach(() => {
        // add base
    })
    // Викликаеться функції перед всима тестом
    beforeAll(() => {
    })
    test('call 1', ()=>{
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2)
        expect(spyMathPow).toBeCalledTimes(1);
    })
    test('call 0 ', ()=>{
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1)
        expect(spyMathPow).toBeCalledTimes(0);
    })

    // test('square 2*2 ',()=>{
    //     expect(squareTest(2)).toBe(4);
    // });
    // test('square a number > result  ',()=>{
    //     expect(squareTest(2)).toBeGreaterThan(3);
    // });
    // test('square a number < result  ',()=>{
    //     expect(squareTest(2)).toBeLessThan(5);
    // });
    // test('not undefined',()=>{
    //     expect(squareTest(2)).not.toBeUndefined();
    // })
    afterAll(() => {
    });
    afterEach(() => {
        jest.clearAllMocks();
    });


})