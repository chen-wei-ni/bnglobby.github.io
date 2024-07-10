const openBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
const popup = document.querySelector(".event-desc");
openBtn.addEventListener("click", (e) => {
    popup.classList.add("open");
    popup.animate(scaleAnimate, scaleTiming);
    document.body.style.overflow = "hidden"
})
closeBtn.addEventListener("click", () => {
    popup.classList.remove("open");
    document.body.style.overflow = "";
})

const scaleAnimate = [
    { transform: 'scale(0)' },
    { transform: ' scale(1)' },
];
const scaleTiming = {
    duration: 50,
    iterations: 1,
}

