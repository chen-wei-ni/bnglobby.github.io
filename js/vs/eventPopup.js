const openBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
const popup = document.querySelector(".event-desc");

openBtn.addEventListener("click", (e) => {
    const block = popup.querySelector(".block");
    popup.style.display = "grid";
    popup.animate(opacityAnimate, scaleTiming);
    block.animate(scaleAnimate, scaleTiming)
    document.body.style.overflow = "hidden"
})
closeBtn.addEventListener("click", () => {

    popup.style.display = "none";
    document.body.style.overflow = "";
})

const opacityAnimate = [
    { opacity: "0" },
    { opacity: "1" },
];
const scaleAnimate = [
    { transform: "scale(0.5)" },
    { transform: "scale(1)" },
];

const scaleTiming = {
    duration: 200,
    iterations: 1,
}
