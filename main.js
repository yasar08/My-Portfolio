var typed= new Typed(".text",{
    strings: ["Front-end Developer" , "Web Developer" ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});


// Select the sidebar and menu button
const sidebar = document.getElementById('sidebar');
const menuButton = document.getElementById('menuButton');

// Show the sidebar when the menu button is clicked
menuButton.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// Hide the sidebar when the close button is clicked
function hideSidebar() {
  sidebar.classList.remove('active');
}

// Hide the sidebar after clicking a link and navigate to the target section
const sidebarLinks = sidebar.querySelectorAll('a');

sidebarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Navigate to the target section
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      event.preventDefault(); // Prevent the default anchor behavior
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });

      // Hide the sidebar after navigation
      sidebar.classList.remove('active');

      // Redirect to the home section after a delay
      setTimeout(() => {
        window.location.hash = '#home';
      }, 1000); // Adjust the delay time if necessary
    }
  });
});











