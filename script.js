
const game = document.getElementById("game");
const hitButton = document.getElementById("hit");
const standButton = document.getElementById("stand");
const restartButton = document.getElementById("restart");

let pointsPlayer = 0;
let pointsDealer = 0;
let finished = false;

function hit(init, points) {
    let pointsCard = Math.floor(Math.random() * 10) + 1;

    if (init) {
        pointsCard += Math.floor(Math.random() * 10) + 1;
        return pointsCard;
    }

    points += pointsCard;
    return points;
}

function stand(dealerPoints) {
    while (dealerPoints < 17) {
        const pointsCard = Math.floor(Math.random() * 10) + 1;
        dealerPoints += pointsCard;
    }

    return dealerPoints;
}

function checkPoints(points, player) {
    if (points > 21) {
        if (player) {
            show("Bust! Du hast verloren!");
        } else {
            show("Der Dealer ist über 21 Punkte! Du hast gewonnen!");
        }

        finished = true;
        return true;
    }

    return false;
}

function calcResult(player, dealer) {
    if (player > 21) {
        return "Bust! Du hast verloren!";
    }

    if (dealer > 21) {
        return "Der Dealer ist über 21 Punkte! Du hast gewonnen!";
    }

    if (player > dealer) {
        return "Du hast gewonnen!";
    }

    if (player < dealer) {
        return "Der Dealer hat gewonnen!";
    }

    return "Niemand hat gewonnen, unentschieden!";
}

function show(message = "") {
    game.textContent =
        "Spieler: " + pointsPlayer +
        "\nDealer: " + (finished ? pointsDealer : "?") +
        "\n\n" +
        (message || "Wähle deine Aktion.");
}

function hitPlayer() {
    if (finished) return;

    const oldPoints = pointsPlayer;
    pointsPlayer = hit(false, pointsPlayer);
    const gained = pointsPlayer - oldPoints;

    if (pointsPlayer > 21) {
        finished = true;
        show("Du hast " + gained + " Punkte bekommen!\nBust! Du hast verloren!");
        return;
    }

    if (pointsPlayer === 21) {
        show("Du hast " + gained +
             " Punkte bekommen!\nDu hast 21 Punkte! Jetzt ist der Dealer dran!");
        finishRound();
        return;
    }

    show("Du hast " + gained + " Punkte bekommen!");
}

function finishRound() {
    if (finished) return;

    pointsDealer = stand(pointsDealer);
    finished = true;

    show(calcResult(pointsPlayer, pointsDealer));
}

function newRound() {
    pointsPlayer = hit(true, 0);
    pointsDealer = hit(true, 0);
    finished = false;

    show();

    if (pointsPlayer === 21) {
        finishRound();
    }
}

hitButton.addEventListener("click", hitPlayer);
standButton.addEventListener("click", finishRound);
restartButton.addEventListener("click", newRound);

newRound();
