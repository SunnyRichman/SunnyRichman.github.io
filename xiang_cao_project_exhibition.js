class Gallery{
  constructor(_imgpath, _caption){
    this.imgpath = _imgpath;
    this.caption = _caption;
  }
}

const gallery = [new Gallery("assets/ir_project/index.jpg", "Index"), new Gallery("assets/ir_project/onewordquery.jpg", "One Word Query Example"),
                  new Gallery("assets/ir_project/onewordqueryResult.jpg", "One Word Query Result Example"),
                  new Gallery("assets/ir_project/multiplewordquery.jpg", "Multiple Word Query Example"),
                  new Gallery("assets/ir_project/multiplewordqueryResult.jpg", "Multiple Word Query Result Example"),
                  new Gallery("assets/ir_project/partialmatch.jpg", "Partial Match Query Example"),
                  new Gallery("assets/ir_project/partialmatchResult.jpg", "Partial Match Query Result Example"),
                  new Gallery("assets/ir_project/ranking.jpg", "Ranking")
];

const articleContainer = document.getElementById("article-container");
const caption = document.getElementById("caption");

articleContainer.innerHTML = `<img src="${gallery[0].imgpath}" class="image" />`;
caption.innerHTML = gallery[0].caption;

let imgIndex = 0;

function previousImg() {
  if (imgIndex > 0 && imgIndex < gallery.length) {
    imgIndex--;
  } else {
    imgIndex = gallery.length - 1;
  }
  articleContainer.innerHTML = `<img src="${gallery[imgIndex].imgpath}" class="image" />`;
  caption.innerHTML = gallery[imgIndex].caption;
}

function nextImg() {
  if (imgIndex >= 0 && imgIndex < gallery.length - 1) {
    imgIndex++;
  } else {
    imgIndex = 0;
  }
  articleContainer.innerHTML = `<img src="${gallery[imgIndex].imgpath}" class="image" />`;
  caption.innerHTML = gallery[imgIndex].caption;
}

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
