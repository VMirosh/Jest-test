const squareTest = require("./square");
 describe( 'squareValidation', ()=>{
     let mockValue;
     // Викликаеться функції перед кожним тестом
     beforeEach(()=>{
         // add base

     })
     // Викликаеться функції перед всима тестом
     beforeAll(()=>{

     })

     test('square 2*2 ',()=>{
         expect(squareTest(2)).toBe(4);
     });
     test('square a number > result  ',()=>{
         expect(squareTest(2)).toBeGreaterThan(3);
     });
     test('square a number < result  ',()=>{
         expect(squareTest(2)).toBeLessThan(5);
     });
     test('not undefined',()=>{
         expect(squareTest(2)).not.toBeUndefined();
     })

     afterAll(()=>{
         //remove base
         }
     );
     afterEach(()=>{});

 })