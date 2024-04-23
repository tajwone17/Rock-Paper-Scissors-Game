let userScore = 0;
let compScore = 0;
const msg=document.querySelector(".msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawgame = () => {
msg.innerText="Game was Draw.Play Again";
msg.style.backgroundColor="yellow";
msg.style.color="black";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }
    else
    {msg.innerText=`You Lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
    msg.style.color="white";
    compScore++;
    compScorePara.innerText=compScore;
}}
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log(userChoice);
    console.log(compChoice);
    if (userChoice === compChoice) {
        drawgame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        }
        else {
            userWin=compChoice === "paper" ? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
   
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});