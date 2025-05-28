let character = document.getElementById('character');
let item = document.getElementById('item');
let dialogue = document.getElementById('dialogue');
let message = document.getElementById('message');
let nextButton = document.getElementById('next');
let backButton = document.getElementById('back');
let exitButton = document.getElementById('exit');
let question = document.getElementById('question');
let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let progressBar = document.getElementById('progress');
let levelDisplay = document.getElementById('level');
let levelUpMessage = document.getElementById('level-up');
let continueButton = document.getElementById('continue');

let level = 1;
let progress = 0;
const dialogues = [
    "Olá! Bem-vindo ao nosso mini game.",
    "Você pode se mover usando as setas do teclado.",
    "Quando encontrar um item, uma pergunta aparecerá.",
    "Vamos ver se você consegue ganhar pontos!"
];
let dialogueIndex = 0;
const itemImages = [
    'url(mino.png)', // original image
    'url(mino-aberto.png)',
    // add more image URLs as needed
];
let currentItemImageIndex = 0;
let dialogueOpen = false;

document.addEventListener('keydown', function(event) {
    if (dialogueOpen) return; // prevent movement if dialogue is open
    
    let characterRect = character.getBoundingClientRect();
    let gameRect = document.getElementById('game').getBoundingClientRect();

    switch(event.key) {
        case 'ArrowUp':
            if (characterRect.top > gameRect.top) {
                character.style.top = (character.offsetTop - 10) + 'px';
            }
            break;
        case 'ArrowDown':
            if (characterRect.bottom < gameRect.bottom) {
                character.style.top = (character.offsetTop + 10) + 'px';
            }
            break;
        case 'ArrowLeft':
            if (characterRect.left > gameRect.left) {
                character.style.left = (character.offsetLeft - 10) + 'px';
            }
            break;
        case 'ArrowRight':
            if (characterRect.right < gameRect.right) {
                character.style.left = (character.offsetLeft + 10) + 'px';
            }
            break;
    }

    if (checkCollision(character, item)) {
        showDialogue();
    }
});

nextButton.addEventListener('click', function() {
    dialogueIndex++;
    if (dialogueIndex < dialogues.length) {
        message.textContent = dialogues[dialogueIndex];
    } else {
        dialogue.classList.add('hidden');
        question.classList.remove('hidden');
    }
});

backButton.addEventListener('click', function() {
    if (dialogueIndex > 0) {
        dialogueIndex--;
        message.textContent = dialogues[dialogueIndex];
    }
});

exitButton.addEventListener('click', function() {
    dialogue.classList.add('hidden');
    dialogueOpen = false;
    resetItem();
});

yesButton.addEventListener('click', function() {
    updateProgress(10);
    dialogue.classList.add('hidden'); // Hide the dialogue after clicking "yes"
    dialogueOpen = false; // Allow movement again
});

noButton.addEventListener('click', function() {
    updateProgress(-10);
});

continueButton.addEventListener('click', function() {
    levelUpMessage.classList.add('hidden');
    resetProgress();
});

function checkCollision(rect1, rect2) {
    let rect1Rect = rect1.getBoundingClientRect();
    let rect2Rect = rect2.getBoundingClientRect();

    return !(rect1Rect.right < rect2Rect.left ||
             rect1Rect.left > rect2Rect.right ||
             rect1Rect.bottom < rect2Rect.top ||
             rect1Rect.top > rect2Rect.bottom);
}

function resetItem() {
    item.style.top = Math.floor(Math.random() * 370) + 'px';
    item.style.left = Math.floor(Math.random() * 370) + 'px';
    item.style.backgroundImage = itemImages[currentItemImageIndex];
}

function showDialogue() {
    dialogueIndex = 0;
    message.textContent = dialogues[dialogueIndex];
    dialogue.classList.remove('hidden');
    currentItemImageIndex = (currentItemImageIndex + 1) % itemImages.length;
    item.style.backgroundImage = itemImages[currentItemImageIndex];
    dialogueOpen = true; // Prevent movement
}

function updateProgress(amount) {
    progress += amount;
    if (progress >= 100) {
        levelUp();
    } else if (progress < 0) {
        progress = 0;
    }
    progressBar.style.width = progress + '%';
}

function levelUp() {
    level++;
    levelDisplay.textContent = 'Nível ' + level;
    levelUpMessage.classList.remove('hidden');
}

function resetProgress() {
    progress = 0;
    progressBar.style.width = progress + '%';
    resetItem();
}
