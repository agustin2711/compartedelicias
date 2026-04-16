window.Utils = {
  money(value) {
    const number = Number(value);
    if (Number.isNaN(number)) return value;
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    }).format(number);
  },

  buildWhatsappLink(product) {
    const phone = "5491150296966";
    const message = `Hola! Quiero hacer un pedido de ${product.name}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  },

  escapeHtml(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  },
};