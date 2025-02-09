const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "What do you call a fake noodle? An impasta!",
    "Why did the math book look so sad? Because it had too many problems!"
];

const jokeText = document.getElementById('joke-text');
const jokeButton = document.getElementById('joke-button');
const face = document.getElementById('face');
const leftEye = document.getElementById('left-eye');
const rightEye = document.getElementById('right-eye');

jokeButton.addEventListener('click', () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeText.textContent = randomJoke;
    animateFace();
});

function animateFace() {
    face.style.transform = 'rotate(10deg)';
    setTimeout(() => {
        face.style.transform = 'rotate(-10deg)';
    }, 200);
    setTimeout(() => {
        face.style.transform = 'rotate(0deg)';
    }, 400);

    leftEye.style.transform = 'scale(1.2)';
    rightEye.style.transform = 'scale(1.2)';
    setTimeout(() => {
        leftEye.style.transform = 'scale(1)';
        rightEye.style.transform = 'scale(1)';
    }, 200);
}
