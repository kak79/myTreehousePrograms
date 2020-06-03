/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let correctAnswer = 0;

// 2. Store the rank of a player

let rank ; 

// 3. Select the <main> HTML element

const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const question1 = prompt("How many moons does Mercury have?");
 
if ( question1 === "0" ) {
  
  correctAnswer += 1;
  
}

const question2 = prompt("How many moons does Earth have?");

if ( question2 === "1" ) {
  
  correctAnswer += 1;
  
}

const question3 = prompt("How many moons does Mars have?");

if ( question3 === "2" ) {
  
  correctAnswer += 1;
  
}

const question4 = prompt("How many moons does Jupiter have?");

if ( question4 === "67" ) {
  
  correctAnswer += 1;
  
}

const question5 = prompt("How many moons does Saturn have?");
 
if ( question5 === "62" ) {
  
  correctAnswer += 1;
  
}



/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if ( correctAnswer === 5 ) {
  
  rank = "Gold"
  
}

else if ( 3 <= correctAnswer >= 4 ) {

  rank = "Silver"

  }
else if ( 1 <= correctAnswer >= 2 ) {

  rank = "Bronze"

  }  
else if ( 0 === correctAnswer ) {

  rank = "No crown"

  }    
  


// 6. Output results to the <main> element
  
main.innerHTML = ` 
  <h2>You got ${correctAnswer} out of 5 questions correct.</h2>
  <p>Crown earned: <strong>${rank}</strong></p>`
  
  
  
  
  