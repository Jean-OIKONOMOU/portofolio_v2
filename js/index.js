const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

//window.onscroll = function() { myFunction() };

//var header = document.getElementById("myHeader");
//var sticky = header.offsetTop;

//function myFunction() {
//    if (window.pageYOffset > sticky) {
//        header.classList.add("sticky");
//    } else {
//        header.classList.remove("sticky");
//    }
//}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myHeader").style.marginTop  = "0";
  } else {
    document.getElementById("myHeader").style.marginTop  = "-55px";
  }
  prevScrollpos = currentScrollPos;
}
