//scrolls to desired page when clicked
document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('.navbar ul li a');
    
    scrollLinks.forEach(function(scrollLink) {
      scrollLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Scroll to the target element with smooth animation
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });

  //sticks navbar to top of screen when scrolling
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
  });

  //scrolls to desired page
  function scrollAbout(location) {
    const aboutSection = document.getElementById(location);
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }

  const nav = document.getElementById('header');
window.onscroll = function () { 
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        header.classList.add("nav-colored");
        header.classList.remove("nav-transparent");
    } 
    else {
        header.classList.add("nav-transparent");
        header.classList.remove("nav-colored");
    }
};

