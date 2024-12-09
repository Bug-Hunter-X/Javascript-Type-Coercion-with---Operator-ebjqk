function foo(a,b){
if(typeof a === 'number' && typeof b === 'number'){
return a+b;
}else{
return "Error: arguments must be numbers";
}
}
console.log(foo(1,2)); //3
console.log(foo(1,"2")); //Error: arguments must be numbers
console.log(foo(1,[2])); //Error: arguments must be numbers