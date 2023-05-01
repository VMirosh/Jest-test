const mapArrToStringTest = require('./mapArrToStrings');
describe('validate array', ()=>{
    test('equal arr',()=>{
        expect(mapArrToStringTest([1,2,3])).toEqual(["1","2","3"])
    })
    test('not equal arr',()=>{
        expect(mapArrToStringTest([1,2,3])).not.toEqual([1,2,3])
    })
    test('An empty array',()=>{
        expect(mapArrToStringTest([])).toEqual([])
    })
    test('ToContain',()=>{
        expect(mapArrToStringTest([1,2,3])).toContain('1')
    })
    test('ToHaveLength',()=>{
        expect(mapArrToStringTest([1,2,3])).toHaveLength(3)
    })
})