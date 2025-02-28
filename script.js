function changeColor() {
    let controller = document.querySelector('.game-controller');
    let colors = ["🎮", "🕹", "🎲", "👾"];
    let randomIndex = Math.floor(Math.random() * colors.length);
    controller.innerHTML = colors[randomIndex];
}

function rsvp() {
    let message = encodeURIComponent("Hey! I'm excited to join Kriishav's birthday party! 🎉");
    window.open(`https://wa.me/?text=${message}`, '_blank');
}