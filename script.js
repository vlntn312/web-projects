let number;
let tries = 0;
let won = false;
const input = document.getElementById("guess");


function generate_number() {
    number = Math.round(Math.random() * 100)
}


function guess_number() {
    if (won) {
        guess_button.innerHTML = "Raten";
        tries_display.innerHTML = "Versuche: " + tries;
        status_display.innerHTML = "Bitte gib eine Zahl zwischen 0 und 100 ein!"
        generate_number();
        input.required = true;
        won = false;
        return;
    }
    tries ++;
    tries_display.innerHTML = "Versuche: " + tries;
    
    if (guess.value < number) {
        status_display.innerHTML = "Die Zahl ist höher!";
    } else if (guess.value > number) {
        status_display.innerHTML = "Die Zahl ist niedriger!";
    } else {
        status_display.innerHTML = "Du hast gewonnen!";
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()
        tries = 0;
        guess_button.innerHTML = "Neue Runde"
        input.required = false;
        won = true;
    }
    guess.value = "";
}