const openBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
const popup = document.querySelector(".event-desc");
// openBtn.addEventListener("click", (e) => {
//     popup.style.display = "grid";
//     popup.animate(scaleAnimate, scaleTiming);
//     document.body.style.overflow = "hidden"
// })
// closeBtn.addEventListener("click", () => {
//     popup.style.display = "none";
//     document.body.style.overflow = "";
// })

// const scaleAnimate = [
//     { transform: 'scale(0)' },
//     { transform: ' scale(1)' },
// ];
// const scaleTiming = {
//     duration: 50,
//     iterations: 1,
// }


$(function () {
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
        closeBtnInside: true,
        fixedContentPos: true,
        mainClass: 'mfp-with-anim',
        removalDelay: 500,
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        }
    });
    $('.popup-close').click(function () {
        $.magnificPopup.close();
    });
});
