function addToCart() {
    let count = localStorage.getItem('cartCount') || 0;
    count++;
    localStorage.setItem('cartCount', count);
    alert("Added to cart! Total items: " + count);
  }
  
  function validateForm(event) {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    }
  }
  