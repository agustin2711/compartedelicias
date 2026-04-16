window.Api = {
  async getProducts() {
    const URL = "https://opensheet.elk.sh/1NdMqFOxQAV_NcXCrpkLuaG9I0HqnGfjsh6hDCg2gklc/PRODUCTOS";

    try {
      const res = await fetch(URL);
      const data = await res.json();

      const products = data
        .map((row) => {
          const nombre = row.NOMBRE?.trim();
          const activo = row.ACTIVO?.trim();

          if (!nombre) return null;
          if (activo !== "SI") return null;

          return {
            id: row.ID,
            name: nombre,
            description: row.DESCRIPCION,
            price: Number(
            row.PRECIO
              ?.replace(/\$/g, "")
              .replace(/\./g, "")
              .replace(",", ".")
          ),
            image: `img/productos/${row.ARCHIVO}`,
          };
        })
        .filter(Boolean);

      return products;
    } catch (error) {
      console.error("Error cargando productos:", error);
      return [];
    }
  },
};