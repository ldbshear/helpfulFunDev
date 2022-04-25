// function changeNavColor(e) {
//   let colorChanged = document.getElementById("mainNavbar");
//   if (e) {
//     colorChanged.style.background = "#dec0de";
//     setTimeout(() => {
//       colorChanged.style.background = "";
//     }, 3000);
//   }
// }

// document.addEventListener("scroll", changeNavColor);

const triggerHelpful = document.getElementById("helpful");
const triggerEducational = document.getElementById("educational");
const triggerFun = document.getElementById("fun");

let hideNShow = {
  show: function (e) {
    e.style.opacity = "1";
    e.style.transform = "scale(1.2)";
    e.style.transition = "1.2s ease-in-out";
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
triggerEducational.addEventListener("mouseenter", function () {
  let showEducational = document.querySelector(".imgContainer2");
  hideNShow.show(showEducational);
});
triggerEducational.addEventListener("mouseout", function () {
  let showEducational = document.querySelector(".imgContainer2");
  hideNShow.hide(showEducational);
});
triggerFun.addEventListener("mouseenter", function () {
  let showFun = document.querySelector(".imgContainer3");
  hideNShow.show(showFun);
});
triggerFun.addEventListener("mouseout", function () {
  let showFun = document.querySelector(".imgContainer3");
  hideNShow.hide(showFun);
});

