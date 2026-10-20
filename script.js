let number;
let tries = 0;
const input = document.getElementById("guess");


function generate_number() {
    number = Math.round(Math.random() * 100)
}


function guess_number() {
    if (tries == 0) {
        guess_button.innerHTML = "Raten";
        generate_number();
        input.required = true;
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
    }
    guess.value = "";
}