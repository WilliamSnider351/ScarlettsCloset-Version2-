    const urlParams = new URLSearchParams(window.location.search);
    const model = urlParams.get("model");

    const modelNames = {
      anya_taylor_joy: "Anya Taylor-Joy",
      kristen_stewart: "Kristen Stewart",
      christy_turlington: "Christy Turlington",
      charlize_theron: "Charlize Theron",
      amber_valetta: "Amber Valetta",
      scarlett_johansson: "Scarlett Johansson"
    };

    const totalImagesPerModel = {
      anya_taylor_joy: 10,
      kristen_stewart: 10,
      christy_turlington: 10,
      charlize_theron: 10,
      amber_valetta: 10,
      scarlett_johansson: 10
    };

    const imagesPerPage = 5;
    const modelTitle = modelNames[model] || "Model Not Found";
    document.getElementById("model-name").textContent = modelTitle;

    const gallery = document.getElementById("look-gallery");
    const pagination = document.getElementById("pagination-controls");

    const totalImages = totalImagesPerModel[model] || 0;
    let currentPage = parseInt(window.location.hash.replace('#page-', '')) || 1;

    function renderGalleryPage(page) {
      gallery.innerHTML = '';
      pagination.innerHTML = '';

      const start = (page - 1) * imagesPerPage + 1;
      const end = Math.min(start + imagesPerPage - 1, totalImages);

      for (let i = start; i <= end; i++) {
        const imageFile = `images/${model}${i}.png`;
        const item = document.createElement("div");
        item.className = "product-item";
        item.innerHTML = `
          <a href="sale.html?model=${model}&look=${i}">
            <img src="${imageFile}" alt="Look ${i}" />
          </a>
          <p class="product-caption">Look ${i}</p>
        `;
        gallery.appendChild(item);
      }

      const totalPages = Math.ceil(totalImages / imagesPerPage);
      for (let p = 1; p <= totalPages; p++) {
        const btn = document.createElement("button");
        btn.textContent = p;
        btn.className = (p === page) ? "active" : "";
        btn.addEventListener("click", () => {
          currentPage = p;
          window.location.hash = `#page-${p}`;
          renderGalleryPage(p);
        });
        pagination.appendChild(btn);
      }
    }

    renderGalleryPage(currentPage);
