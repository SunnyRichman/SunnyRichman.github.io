function validateLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == "hci_paper" && password == "hci_paper") {
    alert("Login successful! Redirecting...");
    window.location.href = "https://www.canva.com/design/DAGfd30AaHc/L-lOV8nWC6v62yKvxk8tLw/view?utm_content=DAGfd30AaHc&utm_campaign=share_your_design&utm_medium=link2&utm_source=shareyourdesignpanel";
      return false;
  } else {
    alert("Incorrect information, try again.");
    window.location.href = "https://sunnyrichman.github.io/login.html";
      return false;
  }
}