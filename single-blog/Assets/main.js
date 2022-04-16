var dropdownCategory = document.getElementById("dropdown-category");
var iconCategory = document.getElementById("icon-category");

function toggleCategory(){
 dropdownCategory.classList.toggle("active");

};
iconCategory.addEventListener('click' , toggleCategory);



let submenuIcons = document.getElementsByClassName("submenu-icon");
const subMenus = document.getElementsByClassName("sub-menu");

console.log(subMenus);
var self = this;

for (var i = 0; i < submenuIcons.length; i++) {
    (function(index) {
        var self = this;
        this.subMenus = subMenus;
        this.submenuIcons = submenuIcons;
        submenuIcons[index].addEventListener("click", function() {
            console.log("you clicked region number " + index);
            self.subMenus[index].classList.toggle("active");
            // self.submenuIcons[index].classList.toggle("fa-times");
          })
    })(i);
 }

var quickGuid = document.getElementById("quick-guid");
var submenuquickGuid = document.getElementById("submenu-quickguid");

var popular = document.getElementById("popular");
var submenuPopular = document.getElementById("submenu-popular");

var latest = document.getElementById("latest");
var submenuLatest = document.getElementById("submenu-latest");

function toggleGuid(){
    console.log("guid");
    submenuquickGuid.classList.toggle("active");
};
quickGuid.addEventListener('click' ,toggleGuid);


function togglePopular(){
    console.log("popular");
    submenuPopular.classList.toggle("active");
};
popular.addEventListener('click' ,togglePopular);


function toggleLatest(){
    console.log("latest");
    submenuLatest.classList.toggle("active");
};
latest.addEventListener('click' ,toggleLatest);


if(window.screen.width > 750){
    submenuquickGuid.classList.add("active");
    submenuPopular.classList.add("active");
    submenuLatest.classList.add("active");    
}