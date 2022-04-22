function changeNavColor(e) {
  let colorChanged = document.getElementById("mainNavbar");
  if (e) {
    colorChanged.style.background = "#dec0de";
    setTimeout(() => {
      colorChanged.style.background = "";
    }, 2000);
  }
}

document.addEventListener("scroll", changeNavColor);

// function showImg(e) {
//   console.log("helpful");

//   showHelpful.style.opacity = "1";
//   showHelpful.style.transition = "2s ease-in-out";
// }

// function hideImg(e) {}

let triggerHelpful = document.getElementById("helpful");
//
// triggerHelpful.addEventListener("mouseout", hideImg);

let hideNShow = {
  show: function (e) {
    e.style.opacity = "1";
    // e.style.transform = "translateX(100px)";
    e.style.transform = "scale(1.2)";
    e.style.transition = "1.3s ease-in-out";
  },
  hide: function (e) {
    e.style.opacity = "0";
    e.style.transform = "scale(1)";
    e.style.transition = ".8s ease-in-out";
  },
};
triggerHelpful.addEventListener("mouseenter", function () {
  let showHelpful = document.querySelector(".imgContainer");
  hideNShow.show(showHelpful);
});

triggerHelpful.addEventListener("mouseout", function () {
  let showHelpful = document.querySelector(".imgContainer");
  hideNShow.hide(showHelpful);
});
console.log(hideNShow);
