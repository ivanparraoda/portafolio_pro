document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var triggerScroll = 200;

    // Container 1
    var container1 = document.querySelector('.initial-container');
    var container2 = document.querySelector('.scroll-container');

    if (scrollPosition > triggerScroll) {
      // If scrolled down beyond the trigger point
      container1.style.opacity = '0';
      container2.style.opacity = '1';
    } else {
      // If not scrolled down enough
      container1.style.opacity = '1';
      container2.style.opacity = '0';
    }
  });
});
