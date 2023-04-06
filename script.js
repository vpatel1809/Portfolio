function checkAge() {
  const age = document.getElementById("age").value;
  const message = document.getElementById("message");
  const registrationForm = document.getElementById("registration-form");

  if (age < 20) {
    message.innerHTML = "Sorry, you are not eligible.";
    message.style.color = "black";
    message.style.fontSize = "24px";
    registrationForm.style.display = "none";
  } else {
    message.innerHTML = "Congratulations, you are eligible!";
    message.style.color = "black";
    message.style.fontSize = "24px";
    registrationForm.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', init, false);
function init() {
  const age = document.getElementById("age");
  age.addEventListener('focus', (event) => {
    console.log("Age - ", age)
    event.target.style.background = 'red'
  });
};

const showNotification = () => {
  alert("Welocme to my website");
}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const body = document.querySelector("body");

btn1.addEventListener("click", () => {
  body.className = "color-scheme-1";
});

btn2.addEventListener("click", () => {
  body.className = "color-scheme-2";
});

btn3.addEventListener("click", () => {
  body.className = "color-scheme-3";
});

