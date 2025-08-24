/*.

Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
 */

let calculator = {

    read (){

        this.a = +prompt("Введите 1 число ", );
        this.b = +prompt("Введите 2 число", ) ;
    },

    sum (){

            return this.a + this.b;
    },

    mul() {

            return this.a * this.b
    },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );