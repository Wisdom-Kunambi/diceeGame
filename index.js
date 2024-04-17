// Generate random numbers between 1 and 6 for both players
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Select the image elements for both players
const player1Image = document.querySelector('.img1');
const player2Image = document.querySelector('.img2');

// Select the <h1> element
const titleElement = document.querySelector('h1');

// Construct the source URLs for the random dice images
const diceImageSrc1 = `./images/dice${randomNumber1}.png`;
const diceImageSrc2 = `./images/dice${randomNumber2}.png`;

// Set the source attributes of the image elements to the constructed URLs
player1Image.setAttribute('src', diceImageSrc1);
player2Image.setAttribute('src', diceImageSrc2);

// Compare the random numbers to determine the winner or if it's a draw
if (randomNumber1 > randomNumber2) {
    titleElement.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    titleElement.textContent = "Player 2 Wins! 🚩";
} else {
    titleElement.textContent = "It's a Draw!";
}
