const palindromeOutput = document.getElementById("palindrome-output");
const palindromeClick = document.getElementById("palindrome-button");

function palindrome(input) {

    const wordLenght = input.length;

    for (let i = 0; i < wordLenght / 2; i++) {
        if (input[i] !== input[wordLenght - 1 - i]) {
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

