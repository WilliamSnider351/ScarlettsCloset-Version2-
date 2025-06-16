function generateOrderNumber() {
      const randomNum = Math.floor(Math.random() * 9000000) + 1000000;
      return `112-${randomNum}-8268248`;
    }

    function generateArrivalDate() {
      const options = { weekday: 'long', month: 'long', day: 'numeric' };
      const now = new Date();
      now.setDate(now.getDate() + 3);
      const dateStr = now.toLocaleDateString(undefined, options);
      return `${dateStr}, 4 a.m. – 8 a.m.`;
    }

    const name = sessionStorage.getItem('name') || 'Customer';
    const shippingAddress = sessionStorage.getItem('shipping-address') || '';
    const orderTotal = sessionStorage.getItem('order-total') || '0.00';

    function parseCityState(address) {
      if (!address) return '';
      const parts = address.split(',');
      if (parts.length < 2) return address;
      const city = parts[parts.length - 2].trim();
      const state = parts[parts.length - 1].trim();
      return `${city.toUpperCase()}, ${state.toUpperCase()}`;
    }

    document.getElementById('order-number').textContent = generateOrderNumber();
    document.getElementById('arrival-date').textContent = generateArrivalDate();
    document.getElementById('ship-name').textContent = name;
    document.getElementById('ship-citystate').textContent = parseCityState(shippingAddress);
    document.getElementById('order-total').textContent = orderTotal;