var menuBar = document.getElementById("menu-bar");
var toggleIcon = document.getElementById("toggle-icon");
var closeIcon = document.getElementById("close-menu");

function toggleMenu(){
 menuBar.classList.toggle("active");

};
toggleIcon.addEventListener('click' , toggleMenu);

function closeMenu(){
    menuBar.classList.remove("active");
};
closeIcon.addEventListener('click' , closeMenu);


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




// changing bg-color og menu  when scrolling
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()*1.5 ){
            $("#menu").css({"background-color":"white"});
            $("#menu").css({"border-bottom":"1px solid rgba(0,0,0,0.4)"});     
        }
        else{
            $("#menu").css({"background-color":""});
            $("#menu").css({"border-bottom":"none"}); 
        }

    })
})

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});