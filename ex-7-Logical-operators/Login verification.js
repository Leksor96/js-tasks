let UserName = prompt("Login: ");

if ( UserName === "Админ" ) {
    let password = prompt("Password: ");
    if ( password === "Я главный" ) {
        alert("Здравствуйте!");
    }
    else if ( password === "" || password === null ) {
        alert ("Отменено");
    }
    else {
        alert("Неверный пароль");
    }
}
else if ( UserName === "" || UserName === null ) {
    alert("Отменено");
}
else {
    alert("Я вас не знаю");
}