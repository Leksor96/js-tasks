function Accumulator(startingValue){

    this.value = startingValue;

    this.read = function(){
        this.value += +prompt("Введите число для сложения:",)
    }
}

let accumulator = new Accumulator(20); // начальное значение 1

accumulator.read();
accumulator.read();

alert(accumulator.value);
