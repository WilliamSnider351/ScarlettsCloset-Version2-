document.getElementById("checkout-form").addEventListener("submit", function(event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const shippingAddress = document.getElementById("shipping-address").value;
      const billingAddress = document.getElementById("billing-address").value;
      const card = document.getElementById("card").value;
      const exp = document.getElementById("exp").value;
      const cvv = document.getElementById("cvv").value;

      sessionStorage.setItem("name", name);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("shipping-address", shippingAddress);
      sessionStorage.setItem("billing-address", billingAddress);
      sessionStorage.setItem("card", card);
      sessionStorage.setItem("exp", exp);
      sessionStorage.setItem("cvv", cvv);

      window.location.href = "confirmation.html";
    });