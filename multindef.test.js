const mult = require('./multindef');

test('Empty parameter',()=>{
    expect(mult()).toBe('...');
});

test('Ensure that a real array is passed',()=>{
    expect(mult( {} )).toBe('...');
});

test('Ensure that each parameter of the array is a number',()=>{
    expect(mult([1,2,'e','r','t'])).toBe('....');
});

test('Ensure that no parameter is equal to zero',()=>{
    expect(mult([1,2,3,0,9])).toBe(0);
});
