window.addEventListener("scroll", function () {
  var nav = document.getElementById("nav");
  if (window.scrollY > nav.offsetTop) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
});

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide scroll to top button based on scroll position
window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }

  // Update scroll progress
  var scrollProgress = document.getElementById("scrollProgress");
  var scrollPercent =
    ((document.body.scrollTop || document.documentElement.scrollTop) /
      ((document.documentElement.scrollHeight || document.body.scrollHeight) -
        document.documentElement.clientHeight)) *
    100;
  scrollProgress.style.width = scrollPercent + "%";
});

//slide from menu bar items

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll("#menu a");

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

//navbar
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Smooth scrolling when clicking on menu items
document.querySelectorAll('.topnav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    // Smooth scroll to the target element
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

//for popup menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
});





document.getElementById("close-menu").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  menu.classList.add("hidden");
});

// Close menu when a menu item is clicked (for smaller screens)
var menuItems = document.querySelectorAll("#menu a");
menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    var menu = document.getElementById("menu");
    menu.classList.add("hidden");
  });
});

//responsive heder section
var i = 0;
var txt = "Welcome to my Portfolio..!";
var speed = 250; // Decreased speed for a smoother animation

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Reset index to start over for infinite typing
    i = 0;
    // Clear content to simulate infinite typing
    document.getElementById("demo").innerHTML = "";
    // Call typeWriter again for infinite loop
    typeWriter();
  }
}

// Call typeWriter function immediately after the page loads
typeWriter();



 // Function to toggle certificate pop-up
  function toggleCertificate(certificateId) {
    var certificatePopup = document.getElementById(certificateId);
    certificatePopup.classList.toggle('hidden');
  } 


  
   