const mult = require('./multindef');

test('Empty parameter',()=>{
    expect(mult()).toBe('..');
});

test('Ensure that a real array is passed',()=>{
    expect(mult({})).toBe('...');
});