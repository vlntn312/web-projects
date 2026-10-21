const take_card_button = document.getElementById("take_card_button");
const stand_button = document.getElementById("stand_button");

function take_card(show) {
    card_value = Math.floor(Math.random() * 10) + 1;
    if (show) {
        status_display.innerHTML = "Du hast " + card_value + " Punkte bekommen!"
    }
    return card_value;
}

let player_points = take_card(false);
player_points += take_card(false);
let dealer_points = 0;

player_points_display.innerHTML = "Spieler: " + player_points;
dealer_points_display.innerHTML = "Dealer: ?"

function check_points(player_points, dealer_points) {
    if (player_points > 21) {
        status_display.innerHTML = "Du hast verloren, da du über 21 Punkte hast!";
    }
    if (dealer_points > 21) {
        status_display.innerHTML = "Der Dealer hat verloren, da er über 21 Punkte hat!";
    }
}

function calc_result(player_points, dealer_points) {
    if ((21 - player_points) < (21 - dealer_points)) {
        status_display.innerHTML = "Du hast gewonnen!"
    }
    if ((21 - dealer_points) < (21 - player_points)) {
        status_display.innerHTML = "Der Dealer hat gewonnen!"
    }
    if (player_points == dealer_points) {
        status_display.innerHTML = "unentschieden!"
    }
    check_points(player_points, dealer_points)
}

function hit() {
    player_points += take_card(true);
    player_points_display.innerHTML = "Spieler: " + player_points;
    check_points(player_points, dealer_points);
}

function stand() {
    while (dealer_points < 17) {
        dealer_points += take_card(false)
        dealer_points_display.innerHTML = "Dealer: " + dealer_points;
        check_points(player_points, dealer_points);
    }
    calc_result(player_points, dealer_points);
}

function restart() {
    player_points = take_card(false);
    player_points = take_card(false);
    dealer_points = 0;
    player_points_display.innerHTML = "Spieler: " + player_points;
    dealer_points_display.innerHTML = "Dealer: ?";
    status_display.innerHTML = "Wähle deine Aktion!"
}

