console.log(null || 2 && 3 || 4);

let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

console.log(value);


