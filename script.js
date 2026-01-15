function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "pollybday16") {
    window.location.href = "birthday.html";
  } else {
    alert("wrong password 💔");
  }
}

function openEnvelope() {
  document.getElementById("message").style.display = "block";
  document.getElementById("nextBtn").style.display = "block";
}

function revealGift() {
  document.getElementById("code").style.display = "block";
}
