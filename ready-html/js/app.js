window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})


var audio = document.getElementById("audio");
var btn = $("#toggle-btn");
btn.click(function() {
  if (audio.paused) {
    audio.play();
    btn.text("Пауза");
  } else {
    audio.pause();
    btn.text("Продолжить");
  }
});