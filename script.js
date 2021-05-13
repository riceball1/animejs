const animation = anime({
  targets: ".el",
  translateX: 270,
  delay: function (el, i) {
    return i * 400;
  },
  direction: "alternate",
  loop: true,
  autoplay: false,
  easing: "easeInOutSine",
});

document.querySelector(".play").onclick = animation.play;
document.querySelector(".pause").onclick = animation.pause;
document.querySelector(".restart").onclick = animation.restart;
