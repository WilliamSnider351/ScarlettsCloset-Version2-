const TAX_RATE = 0.08;
    const FREE_SHIPPING_THRESHOLD = 50;
    const SHIPPING_FEE = 5;

    function formatPrice(price) {
      return `$${price.toFixed(2)}`;
    }

    function loadCart() {
      return JSON.parse(localStorage.getItem("cart")) || [];
    }

    function saveCart(cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    function renderCart() {
      const cart = loadCart();
      const cartItemsEl = document.getElementById("cart-items");
      const summaryEl = document.getElementById("cart-summary");
      const emptyMessageEl = document.getElementById("empty-message");

      cartItemsEl.innerHTML = "";

      if (cart.length === 0) {
        summaryEl.style.display = "none";
        emptyMessageEl.style.display = "block";
        return;
      }

      emptyMessageEl.style.display = "none";
      summaryEl.style.display = "block";

      cart.forEach((item, index) => {
        const itemEl = document.createElement("div");
        itemEl.className = "cart-item";

        itemEl.innerHTML = `
          <div class="item-info">
            <div class="item-name">${item.name}</div>
            <div class="item-details">Size: ${item.size} | Color: ${item.color}</div>
            <div class="quantity-controls">
              <span class="quantity">Qty: ${item.quantity}</span>
              <button aria-label="Remove item" class="remove-btn">Remove</button>
            </div>
          </div>
          <div class="item-price">${formatPrice(item.price * item.quantity)}</div>
        `;

        itemEl.querySelector(".remove-btn").addEventListener("click", () => {
          if (confirm("Remove this item from your cart?")) {
            cart.splice(index, 1);
            saveCart(cart);
            renderCart();
            updateBagCount();
          }
        });

        cartItemsEl.appendChild(itemEl);
      });

      const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const tax = subtotal * TAX_RATE;
      const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
      const total = subtotal + tax + shipping;

      document.getElementById("subtotal").textContent = formatPrice(subtotal);
      document.getElementById("tax").textContent = formatPrice(tax);
      document.getElementById("shipping").textContent = shipping === 0 ? "Free" : formatPrice(shipping);
      document.getElementById("total").textContent = formatPrice(total);

      // Save total to sessionStorage for confirmation page
      sessionStorage.setItem('order-total', total.toFixed(2));
    }

    function updateBagCount() {
      const cart = loadCart();
      const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
      return totalQty;
    }

    renderCart();