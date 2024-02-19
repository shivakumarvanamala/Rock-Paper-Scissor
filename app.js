let userScore = 0;
let compScore = 0;
let display = document.querySelector(".result div");
let user = document.querySelector("#userscore");
let comp = document.querySelector("#compscore");
let msg, compChoice, userChoice;


const options = ["rock", "paper", "scissor"]

let genCompChoice = () => {
    return options[Math.floor(Math.random() * 3)]
}

let displaymsg = (msg) => {
    display.innerHTML = `Your choice : ${userChoice}<br/>
    Computer choice : ${compChoice} <br/>
    ${msg}`
}

let score = (msg) => {
    if (msg == "You won!!") {
        userScore++
        user.innerHTML = userScore;
        display.style.backgroundColor = "green";
    }
    else if (msg == "You lost,try again!") {
        compScore++
        comp.innerHTML = compScore;
        display.style.backgroundColor = "red";
    }
    else {
        display.style.backgroundColor = "rgb(190, 186, 186)";
    }
}

let result = () => {
    if (compChoice == userChoice) {
        msg = "Match was draw."
    }
    else if (userChoice == "rock") {
        msg = compChoice == "paper" ? "You lost,try again!" : "You won!!"
    }
    else if (userChoice == "paper") {
        msg = compChoice == "scissor" ? "You lost,try again!" : "You won!!"
    }
    else {
        msg = compChoice == "rock" ? "You lost,try again!" : "You won!!"
    }
    score(msg);
    displaymsg(msg);
}

let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        compChoice = genCompChoice();
        userChoice = choice.getAttribute("id");
        result();
    })
}
)
