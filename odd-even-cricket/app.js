buttons = document.querySelectorAll("button");

var current = 0;
var playerValue;
var computerValue;
var tossWinner;
var playerScore = 0;
var playerWickets = 0;
var computerScore = 0;
var computerWickets = 0;
var chase = 0;
var batting;

for (var i = 2; i < 12; ++i)
    buttons[i].addEventListener('click', function() {
        switch (this.id) {
            case "p1":
                playerValue = 1;
                break;
            case "p2":
                playerValue = 2;
                break;

            case "p3":
                playerValue = 3;
                break;

            case "p4":
                playerValue = 4;
                break;

            case "p5":
                playerValue = 5;
                break;

            case "p6":
                playerValue = 6;
                break;

            case "p7":
                playerValue = 7;
                break;

            case "p8":
                playerValue = 8;
                break;

            case "p9":
                playerValue = 9;
                break;

            case "p10":
                playerValue = 10;
                break;
        };

        if (current === 0) {
            toss();
        }

        if (current === 1) {
            document.querySelector(".toss").style.display = "none";
            playGame();
        }
    })

function playGame() {
    computerValue = Math.ceil(Math.random() * 10);
    if (chase === 0) {
        if (batting === "player") {
            document.querySelectorAll(".toss-image")[0].setAttribute("src", "images\\bat.png");
            document.querySelectorAll(".toss-image")[1].setAttribute("src", "images\\ball.png");
            if (playerValue === computerValue) {
                playerWickets++;
                document.querySelector(".score").innerText = "Score-" + playerScore + "/" + playerWickets;
                document.querySelector(".player-num").innerText = playerValue;
                document.querySelector(".computer-num").innerText = computerValue;
                document.querySelector(".runs").innerText = "Out!!!";
            } else {
                playerScore += playerValue;
                document.querySelector(".score").innerText = "Score-" + playerScore + "/" + playerWickets;
                document.querySelector(".player-num").innerText = playerValue;
                document.querySelector(".computer-num").innerText = computerValue;
                document.querySelector(".runs").innerText = "+" + playerValue;
            }
            if (playerWickets === 3) {
                midBreak();
            }
        }
        if (batting === "computer") {
            document.querySelectorAll(".toss-image")[1].setAttribute("src", "images\\bat.png");
            document.querySelectorAll(".toss-image")[0].setAttribute("src", "images\\ball.png");
            if (playerValue === computerValue) {
                computerWickets++;
                document.querySelector(".score").innerText = "Score-" + computerScore + "/" + computerWickets;
                document.querySelector(".player-num").innerText = playerValue;
                document.querySelector(".computer-num").innerText = computerValue;
                document.querySelector(".runs").innerText = "Out!!!";
            } else {
                computerScore += computerValue;
                document.querySelector(".score").innerText = "Score-" + computerScore + "/" + computerWickets;
                document.querySelector(".player-num").innerText = playerValue;
                document.querySelector(".computer-num").innerText = computerValue;
                document.querySelector(".runs").innerText = "+" + computerValue;

            }
            if (computerWickets === 3) {
                midBreak();
            }
        }
    } else {
        if (batting === "player") {
            document.querySelectorAll(".toss-image")[0].setAttribute("src", "images\\bat.png");
            document.querySelectorAll(".toss-image")[1].setAttribute("src", "images\\ball.png");
            if (playerValue === computerValue) {
                playerWickets++;
                document.querySelector(".score").innerText = "Score-" + playerScore + "/" + playerWickets;
                document.querySelector(".player-num").innerText = playerValue;
                document.querySelector(".computer-num").innerText = computerValue;
                document.querySelector(".runs").innerText = "Out!!!";
            } else {
                playerScore += playerValue;
                document.querySelectorAll(".toss-image")[0].setAttribute("src", "images\\bat.png");
                document.querySelectorAll(".toss-image")[1].setAttribute("src", "images\\ball.png");
                document.querySelector(".score").innerText = playerScore + "/" + playerWickets;
                document.querySelector(".player-num").innerText = playerValue;
                document.querySelector(".computer-num").innerText = computerValue;
                document.querySelector(".runs").innerText = "+" + playerValue;
            }
            if (playerScore > computerScore) {
                winner = "player";
                document.querySelector(".main-container").style.display = "none";
                document.querySelector(".winner").innerText = "YOU WIN!!!"
                document.querySelectorAll(".final-score")[0].innerText = "Player-\n" + playerScore + "/" + playerWickets;
                document.querySelectorAll(".final-score")[1].innerText = "Computer-\n" + computerScore + "/" + computerWickets;
                document.querySelector(".result-container").style.display = "inline";
            }
            if (playerWickets === 3) {
                winner = "computer";
                document.querySelector(".main-container").style.display = "none";
                document.querySelector(".winner").innerText = "COMPUTER WIN!!!"
                document.querySelectorAll(".final-score")[0].innerText = "Player-\n" + playerScore + "/" + playerWickets;
                document.querySelectorAll(".final-score")[1].innerText = "Computer-\n" + computerScore + "/" + computerWickets;
                document.querySelector(".result-container").style.display = "inline";
            }
        }
        if (batting === "computer") {
            document.querySelectorAll(".toss-image")[1].setAttribute("src", "images\\bat.png");
            document.querySelectorAll(".toss-image")[0].setAttribute("src", "images\\ball.png");
            if (playerValue === computerValue) {
                computerWickets++;
                document.querySelector(".score").innerText = "Score-" + computerScore + "/" + computerWickets;
                document.querySelector(".player-num").innerText = playerValue;
                document.querySelector(".computer-num").innerText = computerValue;
                document.querySelector(".runs").innerText = "Out!!!";
            } else {
                computerScore += computerValue;
                document.querySelector(".score").innerText = "Score-" + computerScore + "/" + computerWickets;
                document.querySelector(".player-num").innerText = playerValue;
                document.querySelector(".computer-num").innerText = computerValue;
                document.querySelector(".runs").innerText = "+" + computerValue;
            }
            if (playerScore < computerScore) {
                winner = "computer";
                document.querySelector(".main-container").style.display = "none";
                document.querySelector(".winner").innerText = "COMPUTER WINS!!!"
                document.querySelectorAll(".final-score")[0].innerText = "Player-\n" + playerScore + "/" + playerWickets;
                document.querySelectorAll(".final-score")[1].innerText = "Computer-\n" + computerScore + "/" + computerWickets;
                document.querySelector(".result-container").style.display = "inline";
            }
            if (computerWickets === 3) {
                winner = "player";
                document.querySelector(".main-container").style.display = "none";
                document.querySelector(".winner").innerText = "YOU WIN!!!"
                document.querySelectorAll(".final-score")[0].innerText = "Player-\n" + playerScore + "/" + playerWickets;
                document.querySelectorAll(".final-score")[1].innerText = "Computer-\n" + computerScore + "/" + computerWickets;
                document.querySelector(".result-container").style.display = "inline";
            }
        }
    }
}


function midBreak() {
    alert("midbreak called");
    if (batting === "player") {
        document.querySelector(".target").innerText = "(Target-" + playerScore + ")";
        document.querySelector(".second-inn").style.display = "inline";
    } else {
        document.querySelector(".target").innerText = "(Target-" + computerScore + ")";
        document.querySelector(".second-inn").style.display = "inline";
    }
    document.querySelector(".score").innerText = "Score-" + 0 + "/" + 0;
    document.querySelector(".player-num").innerText = '';
    document.querySelector(".computer-num").innerText = '';
    document.querySelector(".runs").innerText = '';

}

buttons[22].addEventListener('click', function() {
    chase = 1;
    if (batting === "player") {
        batting = "computer";
    } else {
        batting = "player";
    }
    document.querySelector(".second-inn").style.display = "none";
})

buttons[23].addEventListener('click', function() {
    batting = "player";
    current = 1;
    document.querySelector(".toss-result").style.display = "none";
});
buttons[24].addEventListener('click', function() {
    batting = "computer";
    current = 1;
    document.querySelector(".toss-result").style.display = "none";
});

buttons[25].addEventListener('click', function() {
    current = 1;
    if (batting === "player")
        document.querySelector(".score").innerText = "Score-" + playerScore + "/" + playerWickets;
    else
        document.querySelector(".score").innerText = "Score-" + computerScore + "/" + computerWickets;
    document.querySelector(".toss-result").style.display = "none";
});

buttons[26].addEventListener('click', function() {
    playerScore = 0;
    playerWickets = 0;
    computerScore = 0;
    computerWickets = 0;
    playerValue = 0;
    computerValue = 0;
    document.querySelector(".main-container").style.display = "inline";
    document.querySelectorAll(".toss-image")[0].setAttribute("src", "images\\heads.png");
    document.querySelectorAll(".toss-image")[1].setAttribute("src", "images\\tails.png");
    document.querySelector(".result-container").style.display = "none";
    document.querySelector(".toss").style.display = "inline";
    document.querySelector(".score").innerText = '';
    document.querySelector(".target").innerText = '';
    document.querySelector(".player-num").innerText = '';
    document.querySelector(".computer-num").innerText = '';
    document.querySelector(".runs").innerText = "";
    current = 0;
    chase = 0;
})

buttons[0].addEventListener('click', function() {
    document.querySelector(".initial-container").style.display = "none";
    document.querySelector(".main-container").style.display = "inline";
    document.querySelectorAll(".toss-image")[0].setAttribute("src", "images\\heads.png");
    document.querySelectorAll(".toss-image")[1].setAttribute("src", "images\\tails.png");
})

function toss() {

    computerValue = Math.ceil(Math.random() * 10);
    if ((playerValue + computerValue) % 2 === 0)
        tossWinner = "Computer";
    else {
        tossWinner = "Player";
        document.querySelector(".toss-result").style.display = "inline";
    }

    if (tossWinner === "Computer") {
        var temp = Math.random();
        if (temp < 0.5) {
            batting = "computer";
            document.querySelector(".toss-result").style.display = "inline";
            document.querySelector(".player-choice").style.display = "none";
            document.querySelectorAll(".toss-winner")[0].innerText = "Computer Wins The Toss";
            document.querySelectorAll(".toss-winner")[1].innerText = "And Choses To Bat";
        } else {
            document.querySelector(".toss-result").style.display = "inline";
            document.querySelector(".player-choice").style.display = "none";
            document.querySelectorAll(".toss-winner")[0].innerText = "Computer Wins The Toss";
            document.querySelectorAll(".toss-winner")[1].innerText = "And Choses To Bowl";
            batting = "player";
        }
    } else {
        document.querySelector(".computer-choice").style.display = "none";
    }
}