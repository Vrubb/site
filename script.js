const gallery = document.querySelector(".gallery");
let isDown = false;
let startX, startY, scrollLeft, scrollTop;
let isDragging = false;

// Start Dragging
gallery.addEventListener("mousedown", (e) => {
    isDown = true;
    isDragging = false; // Reset dragging state
    gallery.style.cursor = "grabbing";
    startX = e.clientX;
    startY = e.clientY;
    scrollLeft = gallery.scrollLeft;
    scrollTop = gallery.scrollTop;
});

gallery.addEventListener("mouseup", () => {
    isDown = false;
    gallery.style.cursor = "grab";
});

// Detect Dragging
gallery.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    isDragging = true; // Mark as dragging
    const walkX = (e.clientX - startX) * 1.5;
    const walkY = (e.clientY - startY) * 1.5;
    gallery.scrollLeft = scrollLeft - walkX;
    gallery.scrollTop = scrollTop - walkY;
});

// Fix Click Event to Prevent Accidental Clicks
document.querySelectorAll(".letter").forEach(letter => {
    letter.addEventListener("click", (e) => {
        if (isDragging) return; // Ignore clicks if dragging happened
        alert(`You clicked: ${letter.textContent}`);
        window.location.href = `page-${letter.textContent.toLowerCase()}.html`; // Change this to actual pages
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
