let maxNumber;
let lowNumber;
let randomNumber;


function getRandomNumber(maxNumber,lowNumber,randomNumber) {

    maxNumber = prompt("Please enter your high number");
    maxNumber = parseInt(maxNumber);

    lowNumber = prompt("Please enter your low number");
    lowNumber = parseInt(lowNumber);

    if (  maxNumber && lowNumber ){              
        randomNumber =  Math.floor( Math.random() * (maxNumber - lowNumber + 1) ) + lowNumber;
        alert(`The random number  between ${lowNumber} and ${maxNumber} is ${randomNumber}`)
    }
else {
        alert("Please try again.")
    }
}

getRandomNumber();