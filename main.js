AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



// back to top button start

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {

  if (window.pageYOffset > 100)
  {
    toTop.classList.add("active");
  }
  else
  {
    toTop.classList.remove("active");
  }

})

// back to top button end


// function sendMessage() {
//   const phoneNumber = '+91 8308072960';
//   const message = encodeURIComponent('Hello, how are you?');
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
//   window.open(whatsappUrl, '_blank');
// }


