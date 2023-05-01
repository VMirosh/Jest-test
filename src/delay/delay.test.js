const delay = require('./delay');
describe('delay', ()=>{
    test('delay value good', async () => {
        const sum = await delay(() => 5 + 5, 1000);
        expect(sum).toBe(10)
    })
})