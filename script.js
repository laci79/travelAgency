document.addEventListener('DOMContentLoaded', () => {

    window.scrollTo(0, 0);



    window.addEventListener('scroll', function () {
        let scrollValue = window.scrollY;

        let introImg = this.document.getElementById("intro-img-wrapper");
        let cloud = this.document.getElementById("clouds-wrapper");

        let text = document.getElementById('text');
        introImg.style.top = scrollValue * 0.6 + 'px';
        text.style.top = scrollValue * 0.1 + 'px';
        cloud.style.top = scrollValue * 0.1 + 'px';
    });


    let isVisible = false;
    const nav = document.getElementById('transparent-button');
    const container = document.querySelector('.nav-container');
    const navList = document.querySelector('.nav-list');
    const item = document.querySelectorAll('.nav-item');
    let menu = document.getElementById('list');

    nav.addEventListener('click', () => {
      if (!isVisible) {
        navList.classList.remove('hide');
        navList.classList.add('open');
        isVisible = true;
        item.forEach(link => {
          link.classList.add('fade');
        });
      } else {
        navList.classList.remove('hide');
        navList.classList.remove('open');
        isVisible = false;
        item.forEach(link => {
          link.classList.remove('fade');
        });
      }
    });

    let link = document.getElementsByClassName('nav-item');

    for (let i = 0; i < link.length; i++) {
      if (window.innerWidth < 960) {
        link[i].addEventListener('click', function () {
          navList.classList.remove('open');
          item.forEach(link => {
            link.classList.remove('fade');
          });
          setTimeout(() => {
            navList.classList.add('hide');
          }, 1000);
          isVisible = false;
        });
      }
    }


});

$(document).ready(function () {
    // Add smooth scrolling to all links
    $('a').on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


function scrollDown() {
    $('html, body').animate({scrollTop: 800},'50');
}

