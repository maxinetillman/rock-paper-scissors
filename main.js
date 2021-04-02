let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r"); 
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerText = userScore;
    computerScore_span.innerText = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML= `${smallUserWord} ${convertToWord(userChoice)} beats ${smallCompWord} ${convertToWord(computerChoice)}. You win!`
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("green-glow");
    },300)
}



function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerText = userScore;
    computerScore_span.innerText = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML= `${smallUserWord} ${convertToWord(userChoice)} loses to ${smallCompWord} ${convertToWord(computerChoice)}. You lost!`
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("red-glow");
    },300)
}

function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML= `${smallUserWord} ${convertToWord(userChoice)} draws ${smallCompWord} ${convertToWord(computerChoice)}.`
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr": 
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
           lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}


function main(){
    rock_div.addEventListener("click", function(){
        game("r");
     })
     
     paper_div.addEventListener("click", function(){
         game("p");
     })
     
     scissors_div.addEventListener("click", function(){
         game("s");
     })
}

main()