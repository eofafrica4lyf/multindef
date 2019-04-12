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

test('Ensure that no parameter is equal to NaN',()=>{
    expect(mult([NaN,23])).toBe('NaN');
});

test('Ensure that no parameter is Infinity',()=>{
    expect(mult([1,24,Infinity])).toBe('Infinity');
});

test('Ensure that no parameter is -Infinity',()=>{
    expect(mult([1,24,-Infinity])).toBe('-Infinity');
});