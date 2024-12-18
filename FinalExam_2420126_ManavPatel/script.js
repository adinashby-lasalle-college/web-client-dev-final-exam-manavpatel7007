// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
  
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Add a new project row
    const table = document.querySelector('table tbody');
    const addProjectBtn = document.createElement('button');
    addProjectBtn.textContent = 'Add Project';
    document.getElementById('projects').appendChild(addProjectBtn);
  
    addProjectBtn.addEventListener('click', () => {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>New Project</td>
        <td>A new project description</td>
        <td>2024-12-18</td>
      `;
      table.appendChild(newRow);
    });
  
    // Form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      if (!name || !email || !message) {
        e.preventDefault();
        alert('All fields are required!');
      }
    });
  });
  // Get the button element
const scrollToTopBtn = document.getElementById("scroll-to-top");


// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
 /* Scroll to Top Button JavaScript Functionality */
 window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.style.display = "block"; // Show the button when scrolled down
    } else {
      scrollToTopBtn.style.display = "none"; // Hide the button when at the top
    }
  };
  
  document.getElementById("scroll-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll smoothly to the top
  });
  











  //JQUERY
  $(document).ready(function () {
    // Fade-in effect for main content
    $('main').hide().fadeIn(1000);
  
    // Slide-down effect for nav bar
    $('nav').hover(
      function () {
        $(this).stop().slideDown(300);
      },
      function () {
        $(this).stop().slideUp(300);
      }
    );
  
    // jQuery form validation
    $('#contact-form').on('submit', function (e) {
      const name = $('#name').val();
      const email = $('#email').val();
      const message = $('#message').val();
      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
      }
    });
  });
  $(document).ready(function () {
      // Slide-down effect for the navigation menu on hover
      $(".nav-bar").hover(
        function () {
          $(".nav-links").stop(true, true).slideDown(300); // Slide down the menu on hover
        },
        function () {
          $(".nav-links").stop(true, true).slideUp(300); // Slide up the menu when hover ends
        }
      );

      // Dynamic List Update - Toggle visibility of the resources list
      $("#toggle-resources").click(function() {
        $("#resources").stop(true, true).slideToggle(500); // Toggle visibility with a smooth slide
      });
    });
    $(document).ready(function () {
        // Toggle the visibility of the resources list with a smooth slide transition
        $("#toggle-resources").click(function() {
          $("#resources").stop(true, true).slideToggle(500); // Smooth toggle with 500ms transition
        });
      });
      