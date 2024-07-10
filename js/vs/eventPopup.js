const openBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
const popup = document.querySelector(".event-desc");
const content = document.querySelector(".content")
openBtn.addEventListener("click", (e) => {
    popup.style.display = "grid";
    popup.animate(scaleAnimate, scaleTiming);
    lenis.stop();
})
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    document.body.style.overflow = "";
    lenis.start();
})

const scaleAnimate = [
    { transform: 'scale(0)' },
    { transform: ' scale(1)' },
];
const scaleTiming = {
    duration: 50,
    iterations: 1,
}
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}


requestAnimationFrame(raf)