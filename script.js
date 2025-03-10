const gallery = document.querySelector(".gallery");

// Set up the grid
const rows = 10; // Number of rows
const cols = 10; // How many times A-Z repeats in each row
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Generate the A-Z grid properly this time
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        for (let letter of letters) {
            const span = document.createElement("span");
            span.classList.add("letter");
            span.textContent = letter; // Actually adding letters 💀

            // Fix positioning (spaces out letters)
            span.style.top = `${row * 10}vh`; 
            span.style.left = `${col * 5}vw`;

            gallery.appendChild(span);
        }
    }
}

// Infinite Scrolling Logic
let isDown = false;
let startX, startY, scrollLeft, scrollTop;
let isDragging = false;

// Start Dragging
gallery.addEventListener("mousedown", (e) => {
    isDown = true;
    isDragging = false;
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
    isDragging = true;
    const walkX = (e.clientX - startX) * 1.5;
    const walkY = (e.clientY - startY) * 1.5;
    gallery.scrollLeft = scrollLeft - walkX;
    gallery.scrollTop = scrollTop - walkY;

    // Infinite Scroll Wrapping
    if (gallery.scrollLeft <= 0) {
        gallery.scrollLeft += gallery.scrollWidth / 2;
    } else if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
        gallery.scrollLeft -= gallery.scrollWidth / 2;
    }

    if (gallery.scrollTop <= 0) {
        gallery.scrollTop += gallery.scrollHeight / 2;
    } else if (gallery.scrollTop >= gallery.scrollHeight / 2) {
        gallery.scrollTop -= gallery.scrollHeight / 2;
    }
});

// Click Event
document.addEventListener("click", (e) => {
    if (isDragging) return;
    if (e.target.classList.contains("letter")) {
        alert(`You clicked: ${e.target.textContent}`);
    }
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
