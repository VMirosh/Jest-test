
const validateValue = require('./validateValue');
 test('validate', ()=>{
     let result = validateValue(50);
     expect(result).toBe(true);
 })
describe( "success", ()=>{
    test('validate 50', ()=> {
        expect(validateValue(50)).toBe(true);
    });
})
describe("error",()=>{
    test('validate -1 ', ()=> {
        expect(validateValue(-1)).toBe(false);
    });
    test('validate 101', ()=> {
        expect(validateValue(101)).toBe(false);
    });
})
describe("corner cases",()=>{
    test('validate 1 ', ()=> {
        expect(validateValue(1)).toBe(true);
    });
    test('validate 100', ()=> {
        expect(validateValue(100)).toBe(true);
    });
})