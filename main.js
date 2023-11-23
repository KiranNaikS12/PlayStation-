  // Close dropdowns when clicking outside
  document.addEventListener('click', function(event) {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(menu => {
      if (!event.target.closest('.dropdown')) {
        menu.classList.remove('show');
      }
    });
  });


// To show four images at one time 
var carousel = document.querySelector('#carouselExample');
var myCarousel = new bootstrap.Carousel(carousel);


