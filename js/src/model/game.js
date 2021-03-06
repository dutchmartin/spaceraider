"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Renderer = Renderer();
var Game = /** @class */ (function () {
    function Game() {
    }
    return Game;
}());
var config = {
    height: 500,
    width: 900,
    fps: 60,
    speed: 6,
    stars: 100,
    border: 5,
    spritesize: 32,
    bulletlength: 10,
    shots: 0,
};
var player = {
    speed: 5,
    size: 48,
    x: config.width / 2,
    y: config.height / 2
};
var bullets = {
    count: 0,
};
var enemeys = {
    count: 2,
    state: 1,
    skip: 3,
    frame: 0,
    x: 1,
    y: 1,
};
var sprite = new Image();
sprite.src = "img/spritesheet.png";
window.onload = init();
function init() {
    var ctx = document.getElementById("gamecanvas").getContext("2d");
    var refresh = setInterval(update, Math.round(1000 / config.fps));
    createstars();
    leftkey = 0;
    rightkey = 0;
    upkey = 0;
    downkey = 0;
    spacebar = 0;
}
function update() {
    ctx.fillStyle = "#000";
    ctx.clearRect(0, 0, config.width, config.height);
    ctx.fillRect(0, 0, config.width, config.height);
    drawstars();
    playerupdate();
    bullet();
    //drawenemey();
}
function keyhandle(keynum, bool) {
    if (keynum == 37) {
        leftkey = bool;
    }
    if (keynum == 38) {
        upkey = bool;
    }
    if (keynum == 39) {
        rightkey = bool;
    }
    if (keynum == 40) {
        downkey = bool;
    }
    if (keynum == 32) {
        spacebar = bool;
    }
}
document.onkeydown = function (event) {
    keyhandle(event.keyCode, 1);
};
document.onkeyup = function (event) {
    keyhandle(event.keyCode, 0);
};
function gradient(color1, color2) {
    var grd = ctx.createLinearGradient(0, 0, 300, 300);
    grd.addColorStop(0, color1);
    grd.addColorStop(0.5, color2);
    return grd;
}
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function playerupdate() {
    // update the location
    if (leftkey == 1 && player.x >= config.border) {
        player.x = player.x - config.speed;
    }
    if (upkey == 1 && player.y >= config.border) {
        player.y = player.y - config.speed;
    }
    if (rightkey == 1 && player.x + config.border <= config.width - player.size) {
        player.x = player.x + config.speed;
    }
    if (downkey == 1 && player.y + config.border <= config.height - player.size) {
        player.y = player.y + config.speed;
    }
    // draw the player
    ctx.fillStyle = getRandomColor();
    ctx.drawImage(sprite, 0, 0, 32, 32, player.x, player.y, player.size, player.size);
}
function createstars() {
    // create the stars size and location
    star = [];
    starx = [];
    stary = [];
    for (i = 0; i < config.stars; i++) {
        star[i] = 1 + Math.random() * 6;
        starx[i] = Math.random() * 1000 * Math.random();
        stary[i] = Math.random() * 3000 * Math.random();
    }
}
function randomnum() {
    switch (Math.floor(Math.random() * 4) + 1) {
        case 1:
            return 0.2;
        case 2:
            return Math.random() - 0.5;
        case 3:
            return Math.random() + 0.5;
        case 4:
            return Math.random() * -0.5;
    }
}
function drawstars() {
    ctx.fillStyle = gradient("#000", "#fff");
    for (i = 0; i < config.stars; i++) {
        if (star[i] < 0.8) {
            star[i] = 1 + Math.random() * 6;
        }
        if (starx[i] > config.width || starx[i] < 0 || stary[i] > config.height || stary[i] < 0) {
            star[i] = Math.random() + 1 + Math.random() * 6;
            starx[i] = Math.random() * 1000;
            stary[i] = Math.random() * 3000;
        }
        // give the stars a different location
        star[i] = star[i] - 0.05 * Math.random();
        starx[i] = starx[i] + randomnum();
        stary[i] = stary[i] + randomnum();
        // draw the actual stars
        ctx.beginPath();
        ctx.arc(starx[i], stary[i], star[i], 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}
function bullet() {
    config.shots++;
    if (spacebar == 1 && config.shots > config.bulletlength) {
        config.shots = 0;
        bullets.count++;
        bullets[bullets.count] = {
            x: player.x + player.size / 2 - config.spritesize / 8,
            y: player.y + 4,
            dir: "up"
        };
        ctx.drawImage(sprite, 48, 72, 8, 8, player.x + player.size / 2 - config.spritesize / 8, player.y + 4, config.spritesize / 4, config.spritesize / 4);
    }
    for (var key in bullets) {
        if (bullets.hasOwnProperty(key)) {
            bullets[key].y = bullets[key].y - config.speed;
            //console.log(bullets[key]);
            Detectcollsion(bullets[key].x, bullets[key].y);
            var o = config.spritesize / 4;
            ctx.drawImage(sprite, 48, 72, 8, 8, bullets[key].x, bullets[key].y, o, o);
        }
    }
}
// ### function takes the enemys and checks if there is an collision
// @param bullety	the y value of the bullet
// @param bulletX	the x value of the bullet
function Detectcollsion(bulletx, bullety) {
    // x ranges
    var maxrangex = enemys.x + config.spritesize - 2;
    var minrangex = enemys.x + 2;
    // y range
    var rangey = enemy.y + config.spritesize + 4;
    // booleans
    var checkx = minrangex < bulletx && maxrangex > bulletx;
    if (checkx) {
        console.log('hit');
    }
}
function drawenemey() {
    if (enemeys.state == 3) {
        enemeys.state = 0;
    }
    else {
        if (enemeys.skip == 3) {
            enemeys.skip = 0;
            enemeys.state++;
        }
        else {
            enemeys.skip++;
        }
    }
    var rand = Math.random();
    enemeys.y = enemeys.y + 0.08 * Math.random();
    enemeys.x = 200 + Math.cos(enemeys.y * Math.pow(1, 10)) * Math.pow(config.speed, 2.7);
    enemeys.y = enemeys.y + rand;
    var size = config.spritesize;
    ctx.drawImage(sprite, enemeys.state * size, 3 * size, size, size, enemeys.x, enemeys.y, size * 1.2, size * 1.2);
    enemeys.y = enemeys.y - rand;
}
/*
for (var key in enemeys) {
    if (enemeys.hasOwnProperty(key)) {
        enemeys.count++;
        //animate
?/ 		}*/ 
//# sourceMappingURL=game.js.map