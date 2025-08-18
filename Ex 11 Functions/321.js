

function getNumber(a ,b ) {

    if (typeof a !== "number" || typeof b !== "number" || b < 1 ) {
        console.log("Неверное значение");

        return;
    }

    for (let c = 0; c < b ; ++c) {
        console.log(a);
    }
}

getNumber(-4,4);