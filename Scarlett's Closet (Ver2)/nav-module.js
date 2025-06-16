document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-black px-4">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="index.html" style="font-family: 'Playfair Display', serif;">Scarlett’s Closet</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="boutique.html">Find a Boutique</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="bag.html">Shopping Bag</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="chat.html">Chat with Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  const navbarContainer = document.getElementById("navbar");
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;
  }
});
