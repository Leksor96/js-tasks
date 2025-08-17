let age = 10;
if ( age < 14 || age > 90 ) {
    console.log( "Вариант 1:", age);
}
else {
    console.log("Вариант 1:", age, "неверное значение!");
}
if (!(age >= 14 && age <= 90) ) {
    console.log("Вариант 2:", age);
}
else {
    console.log("Вариант 1:", age, "неверное значение!");
}