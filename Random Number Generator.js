let maxNumber = prompt("Please enter your high number");
maxNumber = parseInt(maxNumber);

let lowNumber = prompt("Please enter your low number");
lowNumber = parseInt(lowNumber);

if (  maxNumber && lowNumber ){
                    
    let randomNumber =  Math.floor( Math.random() * (maxNumber - lowNumber + 1) ) + lowNumber;
    alert(`The random number is ${randomNumber} between ${lowNumber} and ${maxNumber}`)

}



else {

    alert("Please try again.")

}