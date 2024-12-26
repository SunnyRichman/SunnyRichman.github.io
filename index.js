var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active"); // Toggle active state for button
    var content = this.nextElementSibling; // Select the content element
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Collapse content
      content.classList.remove("expanded"); // Remove border
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // Expand content
      content.classList.add("expanded"); // Add border
    }
  });
}
