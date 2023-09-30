const track = document.getElementById("image-bar");
const rise = document.getElementById("rise");

let isDragging = false;
let startX = 0;

// Touch events
track.addEventListener("touchstart", e => {
    isDragging = true;
    const touch = e.touches[0];
    startX = touch.clientX;
    track.dataset.touchX = startX;
});

track.addEventListener("touchend", () => {
    isDragging = false;
    track.dataset.touchX = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
});

track.addEventListener("touchmove", e => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const touchDelta = startX - touch.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (touchDelta / maxDelta) * -50;
    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -70);

    track.dataset.percentage = nextPercentage;
    track.style.transform = `translate(${nextPercentage}%, 0%)`;

    const images = track.getElementsByClassName("image");
    for (const image of images) {
        image.style.objectPosition = `${100 + (1.4 * nextPercentage)}% center`;
    }
});

document.addEventListener("mousedown", e => {
    isRising = true;
});

// Mouse events
track.addEventListener("mousedown", e => {
    isDragging = true;
    startX = e.clientX;
    track.dataset.touchX = startX;
});

document.addEventListener("mouseup", () => {
    if (isDragging) {
        isDragging = false;
        track.dataset.touchX = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    }
});

document.addEventListener("mousemove", e => {
    if (!isDragging) return;

    const mouseDelta = startX - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -50;
    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -70);

    track.dataset.percentage = nextPercentage;
    track.style.transform = `translate(${nextPercentage}%, 0%)`;

    const images = track.getElementsByClassName("image");
    for (const image of images) {
        image.style.objectPosition = `${100 + (1.4 * nextPercentage)}% center`;
    }
});

let intervalId;
let current = 60;
let target = 15; // Change this to your desired target width
let step = 0.5; // Change this to control the speed of resizing

function moveImage() {
    if (current > target) {
        current -= step;
        rise.style.marginTop = current + '%';
    } else {
        clearInterval(intervalId);
    }
}

function startMove() {
    intervalId = setInterval(moveImage, 20); // Adjust the interval duration as needed
}
startMove()

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}