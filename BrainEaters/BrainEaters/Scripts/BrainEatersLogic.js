$(document).ready(function () {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    var tile = {
        isPath: true,
        pathImage: '../path.jpg',
        wallImage: '../wall.jpg',
    };
    var rowArray = [];
    var colArray = [];

    var player = {
        isAlive: true,
        imageUrl: '../player.png',
        positionRow: 0,
        positionCol: 0,
        yPos: 0,
        xPos: 0,
    };

    //initial load
    var playerImage = new Image();
    playerImage.src = player.imageUrl;

    playerImage.onload = function () {
        ctx.drawImage(playerImage, player.xPos, player.yPos);
    }


    //move canMove?
    function canMove(xPos, yPos) {
        //console.log(xPos + ' ' + yPos);
        //console.log(canvas.width + ' ' + canvas.height);

        if (xPos > 0 && xPos < canvas.width) {
            return true;
        }

        if (yPos > 0 && yPos < canvas.height) {
            return true;
        }

        switch (player.xPos) {
            case player.xPos <= 0:
                player.xPos = 50;
                break;

            case player.xPos >= canvas.width:
                player.xPos = canvas.width - 50;
                break;
        }
        return false;
    }
    //move player
    function movePlayer(xPos, yPos) {
        if (canMove(xPos, yPos)) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(playerImage, xPos, yPos);
        }
    }

    //detect key press
    $(document).keydown(function (e) {
        //ensures only the arrow keys are not allowed to move
        if (e.keyCode > 36 && e.keyCode < 41) {
            e.preventDefault();
        }

        switch (e.keyCode) {
            case 37://move left
                movePlayer(player.xPos -= playerImage.width, player.yPos);
                console.log(player.xPos + ' ' + player.yPos);
                break;

            case 38: //move up
                    movePlayer(player.xPos, player.yPos -= playerImage.height);
                break;

            case 39: //move right
                movePlayer(player.xPos += playerImage.width, player.yPos);
                console.log(player.xPos + ' ' + player.yPos);
                break;

            case 40: //move down
                movePlayer(player.xPos, player.yPos += playerImage.height);
                break;
        }
    });
});