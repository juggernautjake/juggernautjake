function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

var section = document.querySelector("span");

gsap.set(span, { autoAlpha: 1 });

var splitHide = new SplitText(span, { type: "words", wordsClass: "hide" });
var split = new SplitText(span, {
  type: "words,lines",
  wordsClass: "words",
  linesClass: "lines"
});

gsap.from(split.words, {
  repeat: -1,
  duration: 1,
  yPercent: 100,
  stagger: 0.3
});