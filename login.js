function validateLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == "hci_paper" && password == "hci_paper") {
    alert("Login successful! Redirecting...");
    window.location.href = "https://www.canva.com/design/DAGfP5q_5Gk/u9YzccuPxDx7DBGeS6ZNzA/view?utm_content=DAGfP5q_5Gk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6f611c7cdf"; // Change to your actual page  
      return false;
  } else {
    alert("Incorrect information, try again.");
    window.location.href = "https://sunnyrichman.github.io/login.html";
      return false;
  }
}