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
