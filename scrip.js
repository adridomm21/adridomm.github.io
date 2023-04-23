let num1 = 1;
let num2 = 2;
let num3 = 3; 

if (num1>num2 && num1>num3) {
    console.log ("el mayor es num1 ");
}else if (num2>num1 && num2>num3) {
    console.log ("el mayor es " + num2 );
}else {
    console.log ("el mayor es " + num3);
}

function numeroMayor(num1, num2, num3){
    if (num1>num2 && num1>num3) {
        console.log ("el mayor es num1 ");
    }else if (num2>num1 && num2>num3) {
        console.log ("el mayor es " + num2 );
    }else {
        console.log ("el mayor es " + num3);
    }
}

numeroMayor(num1, num2, num3)