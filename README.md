# Javascript Type Coercion with + Operator
This example demonstrates how Javascript's type coercion with the + operator can lead to unexpected results.
The function foo takes two arguments and returns their sum. However, if one of the arguments is a string or an array, Javascript will convert the other argument to a string and concatenate them.
This can lead to unexpected results. For example, foo(1,"2") returns "12" instead of 3, and foo(1,[2]) returns "12" instead of 3. 
To avoid this, you should always check the type of your arguments before performing arithmetic operations.