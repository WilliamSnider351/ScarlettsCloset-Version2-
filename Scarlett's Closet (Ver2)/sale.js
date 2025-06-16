const urlParams = new URLSearchParams(window.location.search);
const model = urlParams.get("model");
const look = urlParams.get("look");

function formatModelName(slug) {
  return slug
    .split("_")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const productKey = `${model}${look}`;
const product = productsData[productKey] || {
  name: "Unknown Product",
  description: "Details coming soon.",
  color: "Default",
  price: 0,
};

const imageFile = `images/${productKey}.png`;

document.getElementById("look-image").src = imageFile;
document.getElementById("look-image").alt = product.name;

document.getElementById("look-title").innerHTML = 
  `${product.name} – <a href="models.html?model=${model}" class="model-link">${formatModelName(model)}</a>`;

document.getElementById("look-description").textContent = product.description;
document.getElementById("look-price").textContent = product.price.toFixed(2);

const colorSelect = document.getElementById("color");
colorSelect.innerHTML = `<option>${product.color}</option>`;

document.getElementById("add-to-bag-btn").addEventListener("click", () => {
  const sizeSelected = document.querySelector('input[name="size"]:checked').value;
  const colorSelected = colorSelect.value;
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item =>
    item.name === product.name &&
    item.size === sizeSelected &&
    item.color === colorSelected
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: product.name,
      price: product.price,
      quantity: 1,
      size: sizeSelected,
      color: colorSelected,
      image: imageFile
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Added "${product.name}" (Size ${sizeSelected}) to your bag!`);
  updateBagCount();
});

function updateBagCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("bag-count").textContent = totalQty;
}

updateBagCount();
