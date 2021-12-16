const palindromeOutput = document.getElementById("palindrome-output");
const palindromeClick = document.getElementById("palindrome-button");

function palindrome(paliInput) {

    const wordLenght = paliInput.length;

    for (let i = 0; i < wordLenght / 2; i++) {
        if (paliInput[i] !== paliInput[wordLenght - 1 - i]) {
            return 'La parola non è un palindromo';
        }
    }
    return 'La parola è un palindromo';
}

palindromeClick.addEventListener ('click', function() {
    const palindromeInput = prompt('Enter a string: ');

    const palindromeResult = palindrome(palindromeInput);

    palindromeOutput.innerHTML = palindromeResult;
});

//----------------------------------------------------

const evenClick = document.getElementById('even-button');
const oddClick = document.getElementById('odd-button');
const playerEvenOdd = document.getElementById('evenodd-player-output');
const cpuEvenOdd = document.getElementById('evenodd-cpu-output');
const resultEvenOdd = document.getElementById('evenodd-result-output');
let playerInput;

function cpuRandom (min, max) {
    let cpuResult = Math.floor(Math.random() * (max - min + 1) + min);
    return cpuResult;
}

function evenOdd (sum) {
    if (sum % 2 === 0) {
        let winner = "even";
        return winner;
    }
}

evenClick.addEventListener ('click', function() {
    playerInput = prompt("Inserisci un numero da 1 a 5");
    playerEvenOdd.innerHTML = `Giocatore: ${playerInput}`;
    if (playerInput < 1 || playerInput > 5) {
        resultEvenOdd.innerHTML = "Il numero che hai scelto non è tra 1 e 5";
    } else {
        let cpuInput = cpuRandom (1, 5);
        cpuEvenOdd.innerHTML = `CPU: ${cpuInput}`;
        let sum = parseInt(playerInput) + parseInt(cpuInput);
        let result = evenOdd(sum);
        if (result === "even") {
            resultEvenOdd.innerHTML = `La somma è ${sum}, vince il giocatore.`;
        } else {
            resultEvenOdd.innerHTML = `La somma è ${sum}, vince il computer.`;
        }
    }
});

oddClick.addEventListener ('click', function() {
    playerInput = prompt("Inserisci un numero da 1 a 5");
    playerEvenOdd.innerHTML = `Giocatore: ${playerInput}`;
    if (playerInput < 1 || playerInput > 5) {
        resultEvenOdd.innerHTML = "Il numero che hai scelto non è tra 1 e 5";
    } else {
        let cpuInput = cpuRandom (1, 5);
        cpuEvenOdd.innerHTML = `CPU: ${cpuInput}`;
        let sum = parseInt(playerInput) + parseInt(cpuInput);
        let result = evenOdd(sum);
        if (result != "even") {
            resultEvenOdd.innerHTML = `La somma è ${sum}, vince il giocatore.`;
        } else {
            resultEvenOdd.innerHTML = `La somma è ${sum}, vince il computer.`;
        }
    }
});