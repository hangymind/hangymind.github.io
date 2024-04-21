const scenes = [
    {
        text: "你开始了一段冒险旅程，前方充满了未知。",
        choices: []
    },
    {
        text: "你遇到了一个难题，需要智慧才能解决。",
        choices: []
    },
    // ... 添加更多场景
    {
        text: "最终，我和她说了再见，再一次，最后一次。",
        choices: []
    }
];

let currentSceneIndex = 0;

const sceneElement = document.getElementById('scene');
const nextButton = document.getElementById('nextButton');
const achievementPopup = document.getElementById('achievementPopup');
const closePopupButton = document.getElementById('closePopup');

function displayScene() {
    const currentScene = scenes[currentSceneIndex];
    sceneElement.textContent = currentScene.text;

    if (currentSceneIndex === scenes.length - 1) {
        showPopup();
    }
}

function showPopup() {
    achievementPopup.classList.remove('hidden');
}

closePopupButton.addEventListener('click', () => {
    achievementPopup.classList.add('hidden');
});

nextButton.addEventListener('click', () => {
    currentSceneIndex++;
    if (currentSceneIndex < scenes.length) {
        displayScene();
    }
});

displayScene();
