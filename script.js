document.addEventListener("DOMContentLoaded", () => {

  const hoverElements = document.querySelectorAll(".hov");

  hoverElements.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      elem.style.background = "linear-gradient(135deg, #2ec2f0 0%, #0e7bcf 30%, #0e03a8 95%)";
    });
    elem.addEventListener("mouseleave", () => {
      elem.style.background = "black";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const clickElem = document.getElementById("dropdown-button")
  const linkElem = document.getElementById("dropdown-links")

  clickElem.addEventListener("click", () => {
    if (linkElem.style.display == "none"){
      linkElem.style.display = "flex";
    }
    else {
      linkElem.style.display = "none";
    }
  })
}
)

document.addEventListener("DOMContentLoaded", () => {
  const clickElems = document.querySelectorAll('[id=dropdown-link]')
  const dropdownElem = document.getElementById("dropdown-links")

  clickElems.forEach((elem) => {
    elem.addEventListener("click", () => {
      dropdownElem.style.display="none"
    })
  })
})

function smoothScrollTo(targetId, offset) {
  const vh = window.innerHeight * (offset / 100);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - vh,
      behavior: "smooth",
    });
  }

  event.preventDefault();
}
