function myFunction() {
    var dots1 = document.getElementById("Pacdots");
    var moreText1 = document.getElementById("Pacmore");
    var btnText1 = document.getElementById("PacmyBtn");
  
    if (Pacdots.style.display === "none") {
      Pacdots.style.display = "inline";
      PacbtnText.innerHTML = "Read more";
      PacmoreText.style.display = "none";
    } else {
      Pacdots.style.display = "none";
      PacbtnText.innerHTML = "Read less";
      PacmoreText.style.display = "inline";
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