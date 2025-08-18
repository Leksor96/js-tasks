

function getnumber(a ,b ) {

    if (typeof a == "number" && typeof b == "number" ) {
        for (let c = 0; c < b ; ++c) {
            console.log(a);
    }
    }else {
        console.log("Неверное значение");
    }
}

getnumber(4,3);