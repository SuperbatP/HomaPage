// about
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

 function opentab(tabname, e){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    e.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
} 

//nav
let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

// up btn
const upBtn = document.querySelector(".moveTopBtn");
upBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });  
}