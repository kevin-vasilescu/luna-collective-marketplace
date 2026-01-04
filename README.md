# Luna Collective - Premium Lifestyle Marketplace

## 🌙 Project Overview

Luna Collective is a fully functional, modern e-commerce marketplace website built with vanilla HTML, CSS, and JavaScript. This is a fictional brand marketplace platform designed to showcase curated premium lifestyle products and artisan goods from various sellers.

### Project Purpose
This project demonstrates a complete end-to-end marketplace implementation including:
- Responsive product catalog with filtering and search functionality
- Shopping cart with persistent storage using localStorage
- Category-based browsing
- Modern, intuitive user interface
- Fully documented codebase

### Target Audience
- Premium lifestyle product enthusiasts
- Artisan good buyers
- Conscious consumers seeking curated collections

---

## 📁 Project Structure

```
luna-collective-marketplace/
├── index.html                 # Main landing page
├── css/
│   ├── styles.css             # Main stylesheet with component styles
│   └── responsive.css         # Mobile-first responsive design rules
├── js/
│   ├── products.js            # Product database and filtering logic
│   ├── cart.js                # Shopping cart management system
│   └── main.js                # General utility functions
├── README.md                  # Project documentation (this file)
├── DOCUMENTATION.md           # Comprehensive technical documentation
├── API_REFERENCE.md           # Detailed API and function reference
└── CONTRIBUTING.md            # Contribution guidelines
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server or database required
- No build tools or dependencies needed

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kevin-vasilescu/luna-collective-marketplace.git
   cd luna-collective-marketplace
   ```

2. **Open in browser:**
   - Double-click `index.html` to open locally, OR
   - Use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Or Node.js with http-server
     npx http-server
     ```
   - Visit `http://localhost:8000` in your browser

3. **Deploy to GitHub Pages:**
   - Go to repository Settings > Pages
   - Set Source to `main` branch
   - Your site will be live at `https://kevin-vasilescu.github.io/luna-collective-marketplace/`

---

## ✨ Key Features

### 1. **Product Catalog**
   - 12 curated products across 6 categories
   - High-quality product information (name, price, ratings, descriptions)
   - Beautiful product cards with hover effects
   - Star ratings with review counts

### 2. **Category Browsing**
   - 6 main categories with emoji icons:
     - 👗 Fashion
     - 🏠 Home & Living
     - 🧘 Wellness
     - 💎 Jewelry
     - 👜 Accessories
     - 🎨 Artisan Goods
   - One-click category filtering

### 3. **Search Functionality**
   - Real-time search across product names, descriptions, sellers, and categories
   - Case-insensitive matching
   - Instant feedback with matching results
   - "No results" handling

### 4. **Shopping Cart**
   - Add/remove products with quantity management
   - Persistent cart using browser localStorage
   - Real-time cart count display
   - Slide-out sidebar with cart preview
   - Total price calculation
   - Clear cart functionality
   - Checkout flow (demo)

### 5. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: 480px, 768px, 1024px+
   - Optimized layouts for:
     - Desktop (1024px+)
     - Tablet (768px - 1024px)
     - Mobile (480px - 768px)
     - Extra small (< 480px)
   - Touch-friendly interface elements

### 6. **Modern UI/UX**
   - Gradient color scheme (purple & pink)
   - Smooth animations and transitions
   - Intuitive navigation
   - Visual feedback on interactions
   - Consistent design language
   - Accessibility considerations

---

## 🎨 Design System

### Color Palette
| Color | Variable | Hex Code | Usage |
|-------|----------|----------|-------|
| Primary | `--primary` | `#7c3aed` | Buttons, accents, CTAs |
| Secondary | `--secondary` | `#ec4899` | Hover states, highlights |
| Dark | `--dark` | `#1f2937` | Text, headers |
| Light | `--light` | `#f3f4f6` | Backgrounds, light elements |
| Text | `--text` | `#374151` | Body text |

### Typography
- **Font Family:** Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Heading Scale:** 1rem to 3.5rem
- **Line Height:** 1.6 (body), 1.2 (headings)

### Spacing
- **Base unit:** 1rem (16px)
- **Increments:** 0.5rem, 1rem, 1.5rem, 2rem, 4rem

### Shadows
- **Small:** `0 2px 8px rgba(0, 0, 0, 0.1)`
- **Large:** `0 10px 25px rgba(0, 0, 0, 0.15)`

---

## 📱 Pages & Sections

### 1. **Navigation Bar** (Sticky)
- Logo with brand name
- Search bar with submit button
- Navigation links (Home, Shop, Categories, About)
- Shopping cart icon with item count
- Responsive hamburger menu (on mobile)

### 2. **Hero Section**
- Large gradient background
- Main headline and subheading
- Call-to-action button
- Full-width coverage above fold

### 3. **Categories Section**
- 6 category cards in responsive grid
- Emoji icons for visual appeal
- Hover animation effects
- Click to filter products

### 4. **Products Section**
- Grid layout with responsive columns
- Product cards displaying:
  - Product image (emoji placeholder)
  - Category label
  - Product name
  - Seller name
  - Brief description
  - Star rating with review count
  - Price in USD
  - Add to cart button
- Hover effects for interactivity

### 5. **Shopping Cart Sidebar**
- Fixed position slide-out panel
- Cart items list with quantities
- Remove button per item
- Subtotal breakdown
- Checkout button
- Clear cart button

### 6. **Footer**
- 4-column layout on desktop
- Information sections:
  - About Luna Collective
  - Quick Links
  - Policies
  - Social Connect
- Copyright information
- Responsive stacking on mobile

---

## 🔧 Technical Stack

| Technology | Purpose | Version |
|-----------|---------|----------|
| HTML5 | Semantic markup | Latest |
| CSS3 | Styling & layout | Latest |
| Vanilla JavaScript | Interactivity | ES6+ |
| LocalStorage API | Cart persistence | Built-in |

### Browser Compatibility
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔌 API & Functions

See `API_REFERENCE.md` for complete function documentation.

### Core Functions

**Products Module** (`js/products.js`)
- `renderProducts(productsToShow)` - Render product grid
- `filterByCategory(category)` - Filter products by category
- `searchProducts()` - Search products by keyword

**Cart Module** (`js/cart.js`)
- `addToCart(productId)` - Add product to cart
- `removeFromCart(productId)` - Remove product from cart
- `updateCartDisplay()` - Update cart UI
- `toggleCart()` - Show/hide cart sidebar
- `checkout()` - Process checkout
- `clearCart()` - Empty entire cart

**Main Module** (`js/main.js`)
- `scrollToSection(sectionId)` - Smooth scroll navigation
- `logEvent(eventName, eventData)` - Event tracking

---

## 📊 Product Database

The marketplace includes 12 sample products across 6 categories:

| ID | Product | Category | Price | Seller |
|----|---------|----------|-------|--------|
| 1 | Silk Blend Scarf | Fashion | $89.99 | Luna Textiles |
| 2 | Ceramic Vase Set | Home | $129.99 | Pottery House |
| 3 | Lavender Diffuser | Wellness | $45.99 | Zen Wellness |
| 4 | Pearl Earrings | Jewelry | $159.99 | Luminous Jewelry |
| 5 | Leather Tote Bag | Accessories | $199.99 | Urban Leather |
| 6 | Hand-Knit Blanket | Artisan | $149.99 | Cozy Creations |

*See `API_REFERENCE.md` for complete product database schema.*

---

## 💾 Data Persistence

### LocalStorage Implementation
- **Key:** `cart`
- **Format:** JSON array of cart items
- **Data Structure:** Each item includes product data + quantity
- **Persistence:** Survives browser refresh and tab closure

```javascript
// Example stored data
[
  {
    id: 1,
    name: "Silk Blend Scarf",
    price: 89.99,
    quantity: 2,
    ...
  }
]
```

---

## 🎯 Usage Examples

### Adding a Product to Cart
```javascript
// Triggered by clicking "Add to Cart" button
addToCart(1); // Adds product with ID 1
```

### Searching for Products
```javascript
// User types in search bar and presses Enter or clicks Search
searchProducts();
// Searches across: product names, descriptions, sellers, categories
```

### Filtering by Category
```javascript
// Triggered by clicking category card
filterByCategory('fashion'); // Shows only Fashion products
```

---

## 🔒 Security Considerations

- **XSS Protection:** Product data is safely rendered using `textContent` where applicable
- **CORS:** No external API calls - fully client-side
- **Data Validation:** Input validation on search functionality
- **No Sensitive Data:** Cart data stored locally, no external transmission

---

## 📈 Future Enhancements

Potential features for expansion:
- [ ] User authentication system
- [ ] Product detail pages with image galleries
- [ ] User reviews and ratings system
- [ ] Wishlist functionality
- [ ] Multiple sorting options (price, popularity, newest)
- [ ] Product filtering by price range and seller
- [ ] Real payment integration (Stripe, PayPal)
- [ ] Order history and tracking
- [ ] Admin panel for seller management
- [ ] Email notifications
- [ ] Mobile app version
- [ ] Advanced search with autocomplete
- [ ] Recommendation engine
- [ ] Customer support chat

---

## 🤝 Contributing

Contributions are welcome! Please see `CONTRIBUTING.md` for guidelines.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 👥 Author

**Kevin Vasilescu**
- GitHub: [@kevin-vasilescu](https://github.com/kevin-vasilescu)
- Portfolio: Luna Collective Project

---

## 📞 Support & Contact

For questions, issues, or feedback:
- Open an issue on GitHub
- Check existing documentation files
- Review the API reference

---

## 📚 Additional Documentation

- **[DOCUMENTATION.md](./DOCUMENTATION.md)** - Comprehensive technical documentation
- **[API_REFERENCE.md](./API_REFERENCE.md)** - Complete function and variable reference
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Guidelines for contributing

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|----------|
| 1.0.0 | 2026-01-04 | Initial release with full marketplace functionality |

---

## ✅ Testing Checklist

- [x] Product display and rendering
- [x] Category filtering
- [x] Search functionality
- [x] Add to cart operations
- [x] Remove from cart operations
- [x] Cart persistence with localStorage
- [x] Responsive design (mobile, tablet, desktop)
- [x] Navigation and smooth scrolling
- [x] Cart sidebar toggle
- [x] Checkout flow
- [x] Browser compatibility

---

**Last Updated:** January 4, 2026
**Status:** ✅ Complete and Production Ready