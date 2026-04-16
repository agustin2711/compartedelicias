window.Render = {
  productCard(product) {
    return `
      <article class="product-card">
        <h3 class="product-card__title">${Utils.escapeHtml(product.name)}</h3>

        <div class="product-card__panel">
          <div class="product-card__imageWrap">
            <img class="product-card__image" src="${Utils.escapeHtml(product.image)}" alt="${Utils.escapeHtml(product.name)}" loading="lazy" />
          </div>

          <p class="product-card__description">${Utils.escapeHtml(product.description)}</p>
          <p class="product-card__price">${Utils.money(product.price)}</p>

          <a class="btn btn--order" href="${Utils.buildWhatsappLink(product)}" target="_blank" rel="noopener noreferrer">Hacé tu pedido</a>
        </div>
      </article>
    `;
  },

  renderProducts(products, visibleCount) {
    const grid = document.getElementById("products-grid");
    const loadMoreBtn = document.getElementById("load-more-btn");

    if (!grid) return;

    const visibleProducts = products.slice(0, visibleCount);
    grid.innerHTML = visibleProducts.map((product) => this.productCard(product)).join("");

    if (loadMoreBtn) {
      if (visibleCount >= products.length) {
        loadMoreBtn.style.display = "none";
      } else {
        loadMoreBtn.style.display = "inline-block";
      }
    }
  },
};