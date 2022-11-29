const title = document.querySelectorAll(".experience_detail--title");
const projects = document.querySelectorAll(".projects_demo");
const navigationName = document.querySelector(".navigation_name");
title.forEach((title) => {
  title.addEventListener("click", () => {
    const height = title.nextElementSibling.scrollHeight;
    title.classList.toggle("active");
    if (title.classList.contains("active")) {
      title.nextElementSibling.style.maxHeight = `${height}px`;
      // title.style.color = "black";
      // title.style.backgroundColor = "white";
    } else {
      title.style.color = "black";
      title.style.backgroundColor = "var(--textbackgroundcolor)";
      title.nextElementSibling.style.maxHeight = "0px";
    }
  });
});

projects.forEach((project) => {
  project.addEventListener("click", () => {
    if (project.dataset.intel == "Siammayka") {
      window.open(
        "https://worrasin.github.io/Siammayka-Website/",
        (target = "_blank")
      );
    } else if (project.dataset.intel == "Griller") {
      window.open(
        "https://drive.google.com/file/d/1A78Dhct6BDmvSUxA-iVFDCEFbUVBS_xF/view?usp=sharing",
        (target = "_blank")
      );
    }
  });
});

navigationName.addEventListener("click", () => {
  window.location.hash = "#introduction";
});

const barIcon = document.querySelector("svg");
const navTabs = document.querySelector(".navigation_tabs");

barIcon.addEventListener("click", () => {
  navTabs.classList.toggle("navigation-active");
});
document.onclick = (e) => {
  if (e.target.classList.value != "navigation_icon") {
    navTabs.classList.remove("navigation-active");
  }
};
