function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.offsetHeight;
navbar.style.transition = 'top 0.3s ease-in-out';
window.addEventListener('scroll', throttle(function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const direction = scrollTop > lastScrollTop ? 'down' : 'up';
  if (direction === 'down' && scrollTop > navbarHeight) {
    navbar.style.top = `-${navbarHeight}px`;
  } else if (direction === 'up' || scrollTop <= 0) {
    navbar.style.top = '0';
  }
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = Math.min(scrollTop / maxScroll, 1);
  navbar.style.backgroundColor = `rgba(255, 255, 255, ${scrollFraction})`;
  lastScrollTop = scrollTop;
}, 100));
window.addEventListener('resize', function() {
  navbarHeight = navbar.offsetHeight;
});
window.addEventListener('scroll', function() {
  if (window.pageYOffset > navbarHeight) {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const bookmarks = document.querySelectorAll("#bookmark");
  const hearts = document.querySelectorAll("#heart");
  bookmarks.forEach(bookmark => {
      bookmark.addEventListener("click", function() {
          this.classList.toggle("bookmark-active");
      });
  });
  hearts.forEach(heart => {
      heart.addEventListener("click", function() {
          this.classList.toggle("heart-active");
      });
  });
});
document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (name && email && message) {
      const contactMessage = document.getElementById('contact-message');
      contactMessage.textContent = "Thanks for contacting us!";
      contactMessage.style.color="green";
      contactMessage.classList.add('success-message'); 
      contactMessage.style.display = "block";
      document.querySelector('.contact-form').reset();
  }
});

