let gallery = document.querySelector(".gallery");
let isDown = false;
let startX, startY, scrollLeft, scrollTop;

// Dragging Functionality
gallery.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - gallery.offsetLeft;
    startY = e.pageY - gallery.offsetTop;
    scrollLeft = gallery.scrollLeft;
    scrollTop = gallery.scrollTop;
});

gallery.addEventListener("mouseleave", () => isDown = false);
gallery.addEventListener("mouseup", () => isDown = false);

gallery.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const y = e.pageY - gallery.offsetTop;
    const walkX = (x - startX) * 1.5;
    const walkY = (y - startY) * 1.5;
    gallery.scrollLeft = scrollLeft - walkX;
    gallery.scrollTop = scrollTop - walkY;
});

// Click Event for Letters
document.querySelectorAll(".letter").forEach(letter => {
    letter.addEventListener("click", () => {
        alert(`You clicked: ${letter.textContent}`);
        // Replace with redirection or animation
});

window.addEventListener("scroll", () => {
    document.querySelectorAll(".letter").forEach((letter, index) => {
        let speed = (index % 2 === 0) ? 0.1 : -0.1;
        letter.style.transform = `translateY(${window.scrollY * speed}px)`;
});

document.querySelectorAll(".letter").forEach(letter => {
    letter.addEventListener("click", () => {
        letter.style.color = "#" + Math.floor(Math.random()*16777215).toString(16); // Random color
});

document.querySelectorAll(".letter").forEach(letter => {
    letter.addEventListener("click", () => {
        window.location.href = `page-${letter.textContent.toLowerCase()}.html`;
    });
});
