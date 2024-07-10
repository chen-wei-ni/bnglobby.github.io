const openBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
const popup = document.querySelector(".event-desc");
openBtn.addEventListener("click", (e) => {
    popup.style.display = "grid";
    popup.animate(scaleAnimate, scaleTiming);
    document.body.style.overflow = "hidden"
})
closeBtn.addEventListener("click", () => {
    popup.animate(scaleAnimate2, scaleTiming);
    setTimeout(() => {
        popup.style.display = "none";
    }, 100)
    document.body.style.overflow = "";
})

const scaleAnimate = [
    { transform: 'scale(0)' },
    { transform: ' scale(1)' },
];
const scaleAnimate2 = [
    { transform: 'scale(1)' },
    { transform: ' scale(0)' },
];
const scaleTiming = {
    duration: 100,
    iterations: 1,
}
