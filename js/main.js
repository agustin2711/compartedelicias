document.addEventListener("DOMContentLoaded", async () => {
  const products = await Api.getProducts();
  AppState.products = products;

  Render.renderProducts(AppState.products, AppState.visibleCount);

  const loadMoreBtn = document.getElementById("load-more-btn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      AppState.visibleCount += AppState.step;
      Render.renderProducts(AppState.products, AppState.visibleCount);
    });
  }
});