  // JavaScript function to toggle navbar
  function toggleNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  function showContent(pageId) {
    // Hide all content divs
    var contentDivs = document.querySelectorAll('.content > div');
    contentDivs.forEach(function(div) {
      div.classList.add('hidden');
    });

    // Remove 'active' class from all navbar links
    var navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(function(link) {
      link.classList.remove('active');
    });

    // Show selected content and set corresponding navbar link as active
    document.getElementById(pageId).classList.remove('hidden');
    var activeLink = document.querySelector('.navbar a[href="#' + pageId + '"]');
    activeLink.classList.add('active');
  }
   // Initialize cart count
   let cartCount = 0;

   // Function to add item to cart
   function addToCart() {
       cartCount++;
       updateCart();
   }

   // Function to remove item from cart
   function removeFromCart() {
       if (cartCount > 0) {
           cartCount--;
           updateCart();
       }
   }

   // Function to update cart display
   function updateCart() {
       const cartElement = document.getElementById('cart');
       cartElement.textContent = `Cart: ${cartCount} item${cartCount !== 1 ? 's' : ''}`;
   }
   function updatecount(){
        const countElement = document.getElementById('count');
        countElement.textContent = `count: ${cartCount} item${cartCount !== 1 ? 's' : ''}`;
   }