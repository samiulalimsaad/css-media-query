let result;
let no = 0;
// 1
result = {} + "x";
console.log(`${++no} = `, result);

/**
 {} + "x"   // NaN
 {} is interpreted as an empty code block. The result of + "x" is NaN, because "x" cannot be converted to a number.
 */

// 2
result = Math.min() > Math.max();
console.log(`${++no} = `, result);

/*
Math.min() > Math.max()   // true
Math.min() is a function that returns the lowest-valued number passed into it. The result of that function is Infinity if no parameters are provided. Math.max() returns the highest-valued number and the result is -Infinity if no parameters are provided. Finally, Infinity is greater than -Infinity.
 
 */

// 3
result = 0.1 + 0.2;
console.log(`${++no} = `, result);

/**
 0.1 + 0.2   // 0.30000000000000004
 The result isn't exactly 0.3 because JavaScript uses floating-point representation for numbers. If you want to learn more, check out https://stackoverflow.com/a/588014/8699608
 */

// 4
result = null > 0;
console.log(`${++no} = `, result);

// 5
result = null == 0;
console.log(`${++no} = `, result);

// 6
result = null >= 0;
console.log(`${++no} = `, result);

// 7
result = null <= 0;
console.log(`${++no} = `, result);

/*
null > 0    // false
null === 0  // false
null >= 0   // true
Let's assume the first two results are obvious. Then, it is only important to understand how the >= operator works. The null >= 0 expression is evaluated as follows: if null < 0 is false, then null >= 0 is true. Therefore, the result is true, because null < 0 evaluates to false.
 */

// 8
result = [] == ![];
console.log(`${++no} = `, result);

/*
[] == ![]   // true
The == operator converts both sides to numbers before comparing them. Arrays are always truthy, but empty arrays are always coerced to 0. Therefore, the result of the left side is 0. Because arrays are always truthy, ![] is false. And false is coerced to 0.
 */

// 9
result = [] + [];
console.log(`${++no} = `, result);

// 10
result = {} + [];
console.log(`${++no} = `, result);

// 11
result = [] + {};
console.log(`${++no} = `, result);

/*
{} + []   // 0
[] + {}   // '[object Object]'
In the first expression, {} is interpreted as an empty code block and + [] converts [] to a number. Empty arrays are always coerced to 0. In the second expression, both operands are converted to a string. Array is converted to an empty string '', while the object is converted to '[object Object]'. Finally, '' + '[object Object]' evaluates to '[object Object]'.
*/

// 12
result = typeof null;
console.log(`${++no} = `, result);

/*
typeof null   // 'object'
This has been the case since the beginning of JavaScript. The reason why this didn't get changed is that some code actually relies of typeof null evaluating to 'object'.
 */

// 13
result = 9999999999999999;
console.log(`${++no} = `, result);

/*
9999999999999999   // 10000000000000000
Once again, this happens because JavaScript uses floating-point representation for numbers. At this scale, it is rounded to the nearest even number.
 */

// 14
result = parseInt(null, 24);
console.log(`${++no} = `, result);

/*
parseInt(null, 24)   // 23
null first gets converted to the string 'null'. Because 'n' is the 14th letter of the alphabet, it is added to the numeral system as decimal 23. Why isn't 'l' being parsed as well? Because parsing stops right at 'u', because 'u' isn't available in base-24 system. The result is the same as parseInt('n', 24).
 */

// 15
result = (![] + [])[+[]] + ([][[]] + [])[+[]] + ([][[]] + [])[+!![]];
console.log(`${++no} = `, result);

/*
(![]+[])[+[]]+([][[]]+[])[+[]]+([][[]]+[])[+!![]]   // 'fun'
This code generates the strings 'false' and 'undefined' and grabs the corresponding letters. If you want to learn more, check out https://bluewings.github.io/en/writing-a-sentence-without-using-the-alphabet/#weird-javascript-generator
 */

// 16
result = parseInt(0.0000005);
console.log(`${++no} = `, result);

/*
parseInt(0.0000005)   // 5
parseInt() converts the first parameter to a string. 0.0000005 is converted to '5e-7' so parseInt() returns 5. It stops parsing at 'e' because it cannot parse it in the default base 10.
 */

// 17
result = NaN == NaN;
console.log(`${++no} = `, result);

/*
NaN === NaN   // false
If at least one of the operands of === is NaN, it always returns false. 
 */

// 18
result = [, , ,].toString();
console.log(`${++no} = `, result);

/*
[,,,].toString()   // ',,'
Here, the final comma is in fact a trailing comma and is ignored. Therefore, [,,,].length is actually 3. Using .toString() creates a string with all of the array elements separated by a comma and because our array contains 3 undefined elements, the result is a string with 2 commas ',,'.
 */

// 19
result = [] * [];
console.log(`${++no} = `, result);

// 20
result = [10] * [10];
console.log(`${++no} = `, result);

// 21
result = [3, 4] * [3, 4];
console.log(`${++no} = `, result);

/*
[] * []         // 0
[2] * [2]       // 4
[2,2] * [2,2]   // NaN
Before multiplication, .toString() method is being called for all of the arrays. [].toString() is '', [2].toString() is '2' and [2,2].toString() is '2,2'. The multiplication operator then tries to convert those strings into numbers: '' is converted to 0, '2' is converted to 2, but '2,2' cannot be converted to a number.
 */

// 22
result = parseInt(Infinity, 10);
console.log(`${++no} = `, result);

// 23
result = parseInt(Math.min(), 30);
console.log(`${++no} = `, result);

/*
parseInt(Infinity, 10)   // NaN
parseInt(Infinity, 30)   // 13693557269
First, Infinity gets converted to the string 'Infinity'. Therefore, the first result shouldn't be surprising. In base 30, all letters are valid up to y. And 'Infinit' in base 30 is 13693557269 in base 10.
 */

function name(a, i) {
    // console.log(a);
    return a + i;
}

// 24
result = ["1", "7", "11"].map(name);
console.log(`${++no} = `, result);

// 25
result = ["1", "7", "11"].map(parseInt);
console.log(`${++no} = `, result);

/*
['1', '7', '11'].map(parseInt)   // [1, NaN, 3]
map passes two (actually three) arguments to parseInt. The second argument is the index and parseInt uses it as a radix parameter, so each string in the array is parsed using a different radix. Because index 0 is false, '1' is parsed with default radix 10, '7' is parsed with radix 1, which is unparseable and '11' is parsed with radix 2, so the result is 3.
 */

// 26
result = 3 > 2 > 1;
console.log(`${++no} = `, result);

// 27
result = 1 < 2 < 3;
console.log(`${++no} = `, result);

/*
3 > 2 > 1   // false
First, 3 > 2 evaluates to true. We now have the expression true > 1. true is coerced to 1, but 1 > 1 is false
 */

// 28
result = typeof NaN;
console.log(`${++no} = `, result);

/*
typeof NaN   // 'number'
As weird as it is, NaN is still a numeric type.
 */
