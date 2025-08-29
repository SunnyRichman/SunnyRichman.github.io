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

class Skill{
  constructor(_svg,_caption){
    this.svg = _svg;
    this.caption = _caption;
  }
}

const skillArr = [/*HTML*/new Skill(`<svg viewBox="-1 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>html [#124]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-61.000000, -7639.000000)" fill="#006C6C"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M19.4350881,7485 L19.4279481,7485 L10.8119794,7485 L11.0180201,7487 L19.2300674,7487 C19.109707,7488.752 18.7455658,7492.464 18.6119454,7494.153 L13.99949,7495.451 L13.99949,7495.455 L13.98929,7495.46 L9.37377458,7493.836 L9.05757353,7490 L11.3199411,7490 L11.4800816,7492.063 L13.99337,7493 L13.99949,7493 L16.5086984,7492.1 L16.7667592,7489 L8.95659319,7489 C8.91885306,7488.599 8.43333144,7483.392 8.34867116,7483 L19.6370488,7483 C19.5738086,7483.66 19.5095484,7484.338 19.4350881,7485 L19.4350881,7485 Z M5,7479 L6.63812546,7497.148 L13.98929,7499 L21.3598345,7497.111 L23,7479 L5,7479 Z" id="html-[#124]"> </path> </g> </g> </g> </g></svg>`, "HTML"),
                  /*CSS*/new Skill(`<svg fill="#006C6C" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0.042 21.906v-20.417c0-0.823 0.667-1.49 1.49-1.49h28.87c0.833 0 1.495 0.667 1.495 1.495v19.677c-0.896-0.547-1.948-0.818-3.146-0.818-1.672 0-2.938 0.396-3.802 1.193-0.87 0.797-1.297 1.771-1.297 2.969 0 1.292 0.443 2.25 1.333 2.865 0.521 0.38 1.479 0.719 2.854 1.016l1.401 0.318c0.839 0.182 1.427 0.401 1.813 0.615 0.375 0.245 0.573 0.583 0.573 1.021 0 0.755-0.385 1.276-1.161 1.531l-0.036 0.021h-2.948c-0.385-0.141-0.682-0.339-0.922-0.599-0.24-0.297-0.401-0.734-0.479-1.349h-2.641c0 0.75 0.141 1.391 0.443 1.969h-2.24c0.25-0.516 0.396-1.094 0.396-1.755 0-1.172-0.396-2.068-1.177-2.688-0.5-0.396-1.255-0.714-2.255-0.953l-2.292-0.536c-0.88-0.188-1.453-0.375-1.734-0.536-0.411-0.24-0.609-0.599-0.609-1.052 0-0.505 0.214-0.906 0.625-1.188 0.438-0.281 1-0.411 1.719-0.411 0.656 0 1.172 0.12 1.615 0.344 0.656 0.344 1 0.922 1.052 1.719h2.667c-0.042-1.396-0.552-2.469-1.531-3.208-0.995-0.729-2.167-1.109-3.563-1.109-1.672 0-2.927 0.401-3.802 1.172-0.854 0.776-1.292 1.771-1.292 2.948 0 1.292 0.438 2.25 1.333 2.865 0.531 0.359 1.49 0.698 2.865 1.016l1.391 0.318c0.818 0.182 1.417 0.38 1.818 0.62 0.37 0.24 0.573 0.573 0.573 1.016 0 0.76-0.401 1.25-1.177 1.531h-2.984c-0.38-0.141-0.693-0.339-0.922-0.62-0.24-0.292-0.411-0.75-0.49-1.349h-2.693c0 0.74 0.141 1.396 0.427 1.969h-2.786c0.443-0.693 0.74-1.49 0.885-2.385h-2.74c-0.188 0.682-0.417 1.198-0.698 1.536-0.349 0.438-0.802 0.719-1.359 0.859h-1.635c-0.604-0.141-1.12-0.479-1.536-1.016-0.615-0.745-0.917-1.859-0.917-3.333 0-1.495 0.307-2.625 0.88-3.438 0.599-0.818 1.375-1.214 2.385-1.214 1 0 1.734 0.276 2.255 0.859 0.281 0.318 0.521 0.797 0.693 1.432h2.776c-0.042-0.823-0.349-1.651-0.917-2.479-1.031-1.469-2.656-2.203-4.885-2.203-1.547 0-2.844 0.484-3.88 1.417l-0.068-0.146zM31.901 26.75v-2.068h-0.693c-0.047-0.797-0.396-1.365-1.042-1.703-0.417-0.219-0.958-0.328-1.589-0.328-0.724 0-1.276 0.146-1.698 0.427-0.411 0.286-0.635 0.693-0.635 1.203 0 0.474 0.224 0.828 0.635 1.063 0.297 0.141 0.87 0.339 1.75 0.536l2.292 0.547c0.401 0.083 0.745 0.203 1.068 0.307l-0.068 0.042z"></path> </g></svg>`, "CSS"),
                  /*JS*/new Skill(`<svg fill="#006C6C" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" stroke="#006C6C"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51e75c7"> <path display="inline" fill-rule="evenodd" clip-rule="evenodd" d="M1.008,0.5C0.438,0.583,0.48,1.27,0.521,1.958 c0,169.668,0,339.31,0,508.974c169.364,1.135,340.808,0.162,510.979,0.486c0-170.309,0-340.61,0-510.918 C341.342,0.5,171.167,0.5,1.008,0.5z M259.893,452.167c-11.822,11.919-30.478,18.938-53.429,18.938 c-37.643,0-58.543-18.34-71.884-43.711c12.842-8.2,25.966-16.122,39.344-23.795c5.456,15.262,23.886,32.42,44.683,21.857 c13.183-6.699,11.661-27.01,11.661-49.054c0-45.773,0-98.578,0-139.872c-0.042-0.688-0.083-1.375,0.482-1.458 c15.707,0,31.413,0,47.116,0c0,36.788,0,78.402,0,117.529C277.866,395.199,280.91,430.988,259.893,452.167z M470.696,409.917 c-2.674,39.884-35.243,61.063-79.17,61.188c-43.062,0.124-70.624-19.013-87.433-48.567c12.085-8.317,25.778-15.017,38.375-22.822 c10.08,15.761,27.537,30.91,53.429,28.652c16.131-1.406,34.856-14.555,24.285-34.482c-5.127-9.66-17.516-14.567-28.656-19.425 c-35.352-15.424-76.828-29.571-72.861-84.992c1.327-18.514,9.852-31.525,20.889-40.796c11.311-9.5,26.46-15.867,46.629-16.511 c36.629-1.173,56.723,15.12,70.429,37.884c-11.664,8.891-24.514,16.608-37.401,24.281c-4.229-12.995-24.644-25.658-41.772-17.969 c-7.789,3.493-14.788,13.761-10.684,26.224c3.66,11.115,18.589,17.199,30.599,22.344 C433.706,340.486,474.331,355.693,470.696,409.917z"> </path> </g> </g></svg>`, "JavaScript"),
                  /*NodeJS*/new Skill(`<svg fill="#006C6C" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" stroke="#006C6C"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51f17e3"> <path display="inline" d="M482.585,147.869v216.113c0,14.025-7.546,27.084-19.672,34.143L275.665,506.241 c-5.989,3.474-12.782,5.259-19.719,5.259c-6.838,0-13.649-1.785-19.639-5.259l-62.521-36.99c-9.326-5.207-4.775-7.059-1.692-8.128 c12.454-4.322,14.973-5.318,28.268-12.863c1.387-0.793,3.216-0.483,4.647,0.343l48.031,28.519c1.741,0.981,4.2,0.981,5.801,0 l187.263-108.086c1.744-0.996,2.862-2.983,2.862-5.053V147.869c0-2.117-1.118-4.094-2.906-5.163L258.874,34.716 c-1.726-1.01-4.03-1.01-5.768,0L65.962,142.736c-1.818,1.04-2.965,3.079-2.965,5.133v216.113c0,2.069,1.146,4.009,2.954,4.99 l51.299,29.654c27.829,13.903,44.875-2.485,44.875-18.956V166.309c0-3.017,2.423-5.396,5.439-5.396h23.747 c2.969,0,5.429,2.378,5.429,5.396v213.362c0,37.146-20.236,58.454-55.452,58.454c-10.816,0-19.347,0-43.138-11.713l-49.098-28.287 c-12.133-6.995-19.638-20.117-19.638-34.143V147.869c0-14.043,7.505-27.15,19.638-34.135L236.308,5.526 c11.85-6.701,27.608-6.701,39.357,0l187.248,108.208C475.039,120.748,482.585,133.826,482.585,147.869z M321.171,343.367 c-55.88,0-68.175-14.048-72.294-41.836c-0.477-2.966-3.018-5.175-6.063-5.175h-27.306c-3.382,0-6.096,2.703-6.096,6.104 c0,35.56,19.354,77.971,111.759,77.971c66.906,0,105.269-26.339,105.269-72.343c0-45.623-30.827-57.76-95.709-66.35 c-65.579-8.678-72.243-13.147-72.243-28.508c0-12.661,5.643-29.581,54.216-29.581c43.374,0,59.365,9.349,65.94,38.576 c0.579,2.755,3.083,4.765,5.923,4.765h27.409c1.7,0,3.315-0.73,4.47-1.943c1.158-1.28,1.773-2.947,1.611-4.695 c-4.241-50.377-37.713-73.844-105.354-73.844c-60.209,0-96.118,25.414-96.118,68.002c0,46.217,35.729,59,93.5,64.702 c69.138,6.782,74.504,16.883,74.504,30.488C384.589,333.299,365.655,343.367,321.171,343.367z"> </path> </g> </g></svg>`, "NodeJS"),
                  /*ElasticSearch*/new Skill(`<svg fill="#006C6C" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13.394 0C8.683 0 4.609 2.716 2.644 6.667h15.641a4.77 4.77 0 0 0 3.073-1.11c.446-.375.864-.785 1.247-1.243l.001-.002A11.974 11.974 0 0 0 13.394 0zM1.804 8.889a12.009 12.009 0 0 0 0 6.222h14.7a3.111 3.111 0 1 0 0-6.222zm.84 8.444C4.61 21.283 8.684 24 13.395 24c3.701 0 7.011-1.677 9.212-4.312l-.001-.002a9.958 9.958 0 0 0-1.247-1.243 4.77 4.77 0 0 0-3.073-1.11z"></path></g></svg>`, "ElasticSearch"),
                  /*Kibana*/new Skill(`<svg fill="#006C6C" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#006C6C"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M28.052 31.984h-22.479l13.172-15.812c5.64 3.683 9.307 9.391 9.307 15.812zM28.052 0.052h-23.948v28.735z"></path> </g></svg>`, "Kibana"),
                  /*OpenAI*/new Skill(`<svg fill="#006C6C" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>OpenAI icon</title><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path></g></svg>`, "OpenAI"),
];
let listtile = document.getElementById("listtile");

for(let i=0;i<skillArr.length;i++){
  let svgContainer = document.createElement("div");
  let caption = document.createElement("p");

  svgContainer.setAttribute("class","svg-container")
  svgContainer.innerHTML = skillArr[i].svg;
  caption.innerHTML = skillArr[i].caption;

  let tile = document.createElement("div");
  tile.setAttribute("class","tile");
  tile.appendChild(svgContainer);
  tile.appendChild(caption);

  listtile.appendChild(tile);
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
