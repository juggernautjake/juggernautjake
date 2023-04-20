function myFunction() {
  var dots1 = document.getElementById("dots1");
  var dots2 = document.getElementById("dots2");
  var dots3 = document.getElementById("dots3");
  var moreText1 = document.getElementById("more1");
  var moreText2 = document.getElementById("more2");
  var moreText3 = document.getElementById("more3");
  var btnText1 = document.getElementById("myBtn1");
  var btnText2 = document.getElementById("myBtn2");
  var btnText3 = document.getElementById("myBtn3");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "Read more";
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "Read less";
    moreText1.style.display = "inline";
  }

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
  }

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "Read more";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "Read less";
    moreText3.style.display = "inline";
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