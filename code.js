let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#message");
const userScore = document.querySelector("#userscore");
const computerScore = document.querySelector("#computerscore");

const comChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const drawGame = () => {
    msg.innerText = "Game was a draw. Play again!";
    msg.style.backgroundColor = "gray";
};

const winner = (user, computer) => {
    if (user === computer) {
        drawGame();
    } else if (
        (user === "rock" && computer === "scissor") ||
        (user === "scissor" && computer === "paper") ||
        (user === "paper" && computer === "rock")
    ) {
        userScore++;
        msg.innerText = `You win! ${user} beats ${computer}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        msg.innerText = `You lose! ${computer} beats ${user}`;
        msg.style.backgroundColor = "red";
    }

    // Update score display
    userScore.innerText = userScore;
    computerScore.innerText = computerScore;
};

const playGame = (userChoice) => {
    let computerChoice = comChoice();
    winner(userChoice, computerChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => { 
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});








  