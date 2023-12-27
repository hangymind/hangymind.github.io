const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const boxSize = 20;
const canvasSize = canvas.width;
const numBoxes = canvasSize / boxSize;
let snake = [{ x: numBoxes / 2 * boxSize, y: numBoxes / 2 * boxSize }];
let dx = boxSize; // 蛇移动的步长let dy = 0; // 蛇移动的方向，0为竖直，dx为水平，dy为对角线方向。let food = null;
let boss = { x: canvasSize / 2 - 15, y: canvasSize / 2 - 15 }; // boss的位置和大小，这里是一个简单的矩形。你可以根据需要设计boss的形状和行为。let gameOver = false;
let score = 0;
let growthCount = 0; // 用于计算蛇的长度增长点数，增长长度由score控制。每吃一个食物增长1分。// 生成新的食物位置和大小（在地图范围内随机生成）function generateFood() {
    food = { x: Math.floor(Math.random() * numBoxes) * boxSize, y: Math.floor(Math.random() * numBoxes) * boxSize };
}
generateFood(); // 初始化食物位置。// 游戏主循环函数，使用requestAnimationFrame实现平滑动画效果。function gameLoop() {
    if (!gameOver) {
        requestAnimationFrame(gameLoop); // 请求下一帧动画。
        update(); // 更新游戏状态。
        draw(); // 在画布上绘制更新后的游戏状态。
    } else {
        clearInterval(gameLoopId); // 游戏结束时停止游戏循环。
    }
}

    // 如果吃到食物则增长长度并生成新的食物...  
    // 如果碰到boss则游戏结束...  你可以在这里添加生成boss的逻辑和碰撞检测逻辑。例如，当蛇吃到一定数量的食物后，boss会随机出现在地图的一个角落等。  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...
