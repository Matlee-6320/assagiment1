// project 

// Create a new repository named: magic8ball
// Clone your repository
// Add your index file, stylesheet, script file and the provided 8ball images
// Main objectives:
// Create an input field for users to ask a question
// Create a label for your input field telling your user to "Ask me anything!"
// Create an "ask" button (this will run the function that outputs a random magic 8 ball image)
// Create a div with an id of "answers" that you will insert the images into using js
// Create an "ask" function that when clicked, will choose a random 8ball image and insert it into your "answers" div
// Replace the input field with the user's question when displaying the answer
// Style your page any way you like
// Activate Github Pages for your project
// we define answers



// // create random number number function
 function generate_random(max_number) {
// generates x_number)a random number from o to max_number
     return Math.round(Math.random()*max_number);
 }

let button = document.querySelector("button");
let answer = document.querySelector("#answer");


//add click event to the button

button.addEventListener("click",function(){

  //alert("clicked");

//   0 "yes definitly!"
//   1 "no certainly not!"
//   2 "ask again layer!"
//   3 "I really don't care"

// Generate a random Number

   let randomNumber = generate_random(3);
//alert(randomNumber)
// turn the random number into answer using the key AnimationPlaybackEvent
    let answerText = "";

if (randomNumber == 0 ){
    //procedure to run if the condition is true
    answerText = "yes definitly!"
}
   else if (randomNumber == 1 ){
    answerText = "no certainly not";
}
else if (randomNumber == 2 ){
    answerText = "ask again later";
}
else {

//Display the answer in the answer parageraph
answerText = "I really don't care!";
}
 answer.innerHTML = answerText;
});
