const messages = [
    "Are you sure ?",
    "Cent percent??",
    "Momos vangi theram?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, njan karayum...",
    "If u say no, njan sherikum karayume...",
    "Njan karayuva 😭 ...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please baby! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}