
let allimg = document.querySelectorAll("img");
allimg = Array.from(allimg);

let blackbox = document.querySelector(".blackbox")
let disenbox = document.querySelector(".disenbox")
let closes = document.getElementById("closes")
let nextr = document.getElementById("next");
let prev = document.getElementById("prev");

let currentindex = 0;




for (let i = 0; i < allimg.length; i++) {
   allimg[i].addEventListener("click", shwnblackbox)
}

function shwnblackbox(e) {
   let selectimage = e.target;

   currentindex = allimg.indexOf(selectimage)

   disenbox.style.backgroundImage = "url(" + selectimage.src + ")"

   blackbox.classList.replace("hiden", "shwen")


}

closes.addEventListener("click", closeimage)

function closeimage() {
   blackbox.classList.replace("shwen", "hiden")
}

next.addEventListener("click", nextimage)

function nextimage() {
   currentindex++;
   if (currentindex >= allimg.length) {
      currentindex = 0;

   }
   let nextindexsrc = allimg[currentindex].src;
   disenbox.style.backgroundImage = "url(" + nextindexsrc + ")"
}


prev.addEventListener("click", previmage)
function previmage() {
   currentindex--;
   if (currentindex < 0) {
      currentindex = allimg.length - 1;

   }

   let previndexsrc = allimg[currentindex].src;
   disenbox.style.backgroundImage = "url(" + previndexsrc + ")"
}


document.addEventListener("keyup", movkeyup)

function movkeyup(e) {
   if (e.keyCode == 39) {
      nextimage()
   }
   else if (e.keyCode == 37) {
      previmage();
   }
   else if (e.keyCode == 27) {
      closeimage();
   }
}

document.addEventListener("click", closeblacbox)

function closeblacbox(e) {
   if (e.target == blackbox) {
      closeimage();
   }
}
