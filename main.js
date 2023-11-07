import "./style.scss";

const email = document.querySelector(".container-input-email");
const button = document.querySelector(".container-button button");

function validationEmail(email) {
  var check = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
  if (check.exec(email) == null) {
    return false;
  } else {
    return true;
  }
}

let isValidateEmail;

email.addEventListener("input", (e) => {
  isValidateEmail = validationEmail(e.target.value);
  if (isValidateEmail == false) {
    e.target.classList.remove("done");
    e.target.classList.add("error");
  } else {
    e.target.classList.remove("error");
    e.target.classList.add("done");
  }
  checkIsButtonDone();
  if (e.target.value === "") {
    e.target.classList.remove("done");
    e.target.classList.remove("error");
  }
});

function checkIsButtonDone() {
  if (isValidateEmail) {
    button.classList.add("correct");
  } else {
    button.classList.remove("correct");
  }
}

button.addEventListener("mouseenter", () => {
  if (!isValidateEmail) {
    button.style.transform = "scale(0)";
    setTimeout(() => {
      button.style.position = "absolute";
      button.style.width = "100px";
      button.style.height = "100px";
      button.style.borderRadius = "50%";
      const maxX = window.innerWidth - button.clientWidth;
      const maxY = window.innerHeight - button.clientHeight;
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }, 300);
  }
});

button.addEventListener("mouseout", () => {
  setTimeout(() => {
    button.style.transform = "scale(1)";
  }, 300);
});
