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
  
  