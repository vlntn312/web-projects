let number = Math.round(Math.random() * 100);
let tries = 0;

function guess_number() {
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
    }
    guess.value = "";
}
