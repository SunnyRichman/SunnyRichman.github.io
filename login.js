function validateLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == "sw_design" && password == "sw_design") {
    alert("Login successful! Redirecting...");
    window.location.href = "https://www.canva.com/design/DAGf2dsBXgo/zUKwOhHCRB15juZuj93tlg/view?utm_content=DAGf2dsBXgo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5b1dd2eafd";
      return false;
  } else {
    alert("Incorrect information, try again.");
    window.location.href = "https://sunnyrichman.github.io/login.html";
      return false;
  }
}