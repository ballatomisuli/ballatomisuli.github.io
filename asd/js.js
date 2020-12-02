var myvar = 5;

addEventListener("keydown", function(e) {
    switch (e.keyCode) {
        case 40:
            myvar = 1;
            console.log(myvar);
            break;
        case 39:
            myvar = 0;
            console.log(myvar);
            break;

    }
});