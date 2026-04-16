# 📄 Documentación del Proyecto - Landing Page Comparte Delicias

## 🎯 Objetivo
Landing page simple orientada a la venta de productos de pastelería artesanal, optimizada para mobile, con integración futura a Google Sheets como base de datos.

---

## 🧱 Estructura del Proyecto

```
/pasteleria-landing
│
├── index.html
├── /css
│   └── styles.css
├── /js
│   └── app.js
├── /assets
│   ├── /img
│   └── /icons
└── README.md
```

---

## 📂 Descripción de Archivos

### 🟢 index.html
Archivo principal de la página.

Contiene:
- Estructura general del sitio
- Navbar con logo y botón de pedido
- Sección Hero
- Catálogo de productos
- Banner promocional
- Footer con contacto

Buenas prácticas aplicadas:
- Uso de etiquetas semánticas (`header`, `section`, `footer`)
- SEO básico (jerarquía de títulos)
- Separación de responsabilidades (sin estilos inline)

---

### 🎨 /css/styles.css
Archivo de estilos globales.

Contiene:
- Variables CSS (colores y tipografías)
- Estilos mobile first
- Media queries para tablet y desktop
- Diseño de:
  - Navbar
  - Hero
  - Tarjetas de productos
  - Botones
  - Footer

Buenas prácticas:
- Uso de `rem` para escalabilidad
- Mobile first
- Reutilización de clases

---

### ⚙️ /js/app.js
Archivo de lógica del sitio.

Contiene:
- Render dinámico de productos
- Lógica del botón "Ver más"
- Manejo de eventos (clicks)

Preparado para:
- Integración con Google Sheets
- Filtrado de productos
- Control de stock futuro

---

### 🖼️ /assets/img
Carpeta para imágenes del sitio.

Contiene:
- Imágenes de productos
- Imagen del hero
- Imagen del banner

Recomendaciones:
- Optimizar tamaño (webp si es posible)
- Mantener proporción 4:3 para productos

---

### 🔘 /assets/icons
Carpeta para íconos.

Contiene:
- WhatsApp
- Instagram
- Facebook
- Ubicación

Formato recomendado:
- SVG para mejor calidad

---

## 🧠 Decisiones Técnicas

- HTML + CSS + JS puro (sin frameworks)
  - ✔ Menor complejidad
  - ✔ Carga rápida
  - ✔ Fácil mantenimiento

- Mobile First
  - ✔ Optimizado para la mayoría de usuarios

- Estructura desacoplada
  - ✔ Permite escalar a futuro

---

## 🚀 Próximos Pasos

1. Conectar Google Sheets como base de datos
2. Implementar lógica de productos del día
3. Agregar control de stock
4. Optimizar imágenes
5. Configurar dominio en Netlify

---

## 📌 Notas

- El proyecto está preparado para escalar sin rehacer código
- Se priorizó simplicidad y rapidez de implementación
- Ideal para validar ventas en corto plazo

---

## 💡 Recomendación

Mantener el flujo simple:
Landing → Usuario ve producto → Click en WhatsApp → Venta

Evitar agregar complejidad innecesaria en esta etapa.

---

