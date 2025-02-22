function validateLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == "hci_paper" && password == "hci_paper") {
    alert("Login successful! Redirecting...");
    window.location.href = "url";
      return false;
  } else {
    alert("Incorrect information, try again.");
    window.location.href = "https://sunnyrichman.github.io/login.html";
      return false;
  }
}