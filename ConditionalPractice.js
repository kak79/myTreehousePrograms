alert("Let's do some math!");

let numberA = prompt("Pick a number.");
numberA = parseFloat(numberA);
console.log(numberA);

let numberB = prompt("Pick a number.");
numberB = parseFloat(numberB);
console.log(numberB);


if ( numberB === 0 ) {

    alert("I cannot divide by 0, Please reload and try again!")

}

else if ( isNaN(numberA) || isNaN(numberB) ) {

    alert("Please reload and enter numbers!")

}


else {

    let numberAdd = numberA + numberB;
    console.log(numberAdd);
    let numberMult = numberA * numberB;
    console.log(numberMult);
    let numberSubt = numberA - numberB;
    console.log(numberSubt);
    let numberDiv = numberA / numberB;
    console.log(numberDiv);


    message = `<h1>"Math with the numbers ${numberA} and ${numberB}</h1>
                <br>${numberA} + ${numberB} = ${numberAdd}
                <br>${numberA} * ${numberB} = ${numberMult}
                <br>${numberA} - ${numberB} = ${numberSubt}
                <br>${numberA} / ${numberB} = ${numberDiv}
                `;
    

    document.write(message);

}
