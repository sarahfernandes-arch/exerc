const player = document.querySelector(".player");
const pipe = document.querySelector(".pipe");

function jump() {

    if (player.classList.contains("jump")) {
        return;
    }

    player.classList.add("jump");

    setTimeout(() => {
        player.classList.remove("jump");
    }, 700);
}

document.addEventListener("keydown", (event) => {

    if (event.code === "Space" || event.code === "ArrowUp") {
        jump();
    }

});

document.addEventListener("click", jump);

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const playerPosition = +window
        .getComputedStyle(player)
        .bottom
        .replace("px", "");

    if (
        pipePosition <= 150 &&
        pipePosition > 0 &&
        playerPosition < 80
    ) {

        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        player.style.animation = "none";
        player.style.bottom = `${playerPosition}px`;

        player.src = "game-over.png";

        clearInterval(loop);

        alert("GAME OVER!");

        location.reload();
    }

}, 10);