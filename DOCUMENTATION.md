# Luna Collective Marketplace - Technical Documentation

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [File Structure](#file-structure)
3. [HTML Structure](#html-structure)
4. [CSS Organization](#css-organization)
5. [JavaScript Modules](#javascript-modules)
6. [Data Flow](#data-flow)
7. [Component Documentation](#component-documentation)
8. [Styling Guide](#styling-guide)
9. [Performance Optimization](#performance-optimization)
10. [Browser Compatibility](#browser-compatibility)

---

## Architecture Overview

### Application Architecture Pattern: MVC-Lite
The application follows a simplified MVC pattern:

**Model (Data)**
- Product catalog in `products.js`
- Cart state in `cart.js`
- All data stored in JavaScript memory + localStorage

**View (UI)**
- HTML markup in `index.html`
- Styling in `css/styles.css` and `css/responsive.css`
- DOM manipulation with vanilla JavaScript

**Controller (Logic)**
- Event handlers in `js/main.js`, `js/products.js`, `js/cart.js`
- Business logic for cart operations
- Filter and search functionality

### No Dependencies
- Pure vanilla HTML, CSS, JavaScript
- No frameworks (React, Vue, Angular)
- No build process required
- Single-page application (SPA) with client-side rendering

---

## File Structure

### Detailed Breakdown

```
luna-collective-marketplace/
│
├── index.html                          # Main entry point (1,200 lines)
│   ├── Meta tags and viewport config
│   ├── Navigation component
│   ├── Hero banner section
│   ├── Categories grid
│   ├── Products grid container
│   ├── Cart sidebar
│   ├── Footer
│   └── Script imports
│
├── css/
│   │
│   ├── styles.css                     # Main stylesheet (600+ lines)
│   │   ├── CSS Variables (--primary, --secondary, etc.)
│   │   ├── Global reset and base styles
│   │   ├── Component styles
│   │   │   ├── Navigation bar
│   │   │   ├── Hero section
│   │   │   ├── Category cards
│   │   │   ├── Product cards
│   │   │   ├── Cart sidebar
│   │   │   └── Footer
│   │   └── Interactive states (hover, active)
│   │
│   └── responsive.css                 # Mobile-first responsive (400+ lines)
│       ├── Tablet breakpoint (768px)
│       ├── Mobile breakpoint (480px)
│       └── Extra-small breakpoint (320px)
│
├── js/
│   │
│   ├── products.js                    # Product module (150+ lines)
│   │   ├── Product database (12 products)
│   │   ├── renderProducts()
│   │   ├── filterByCategory()
│   │   └── searchProducts()
│   │
│   ├── cart.js                        # Cart module (200+ lines)
│   │   ├── Cart state management
│   │   ├── addToCart()
│   │   ├── removeFromCart()
│   │   ├── updateCartDisplay()
│   │   ├── localStorage integration
│   │   ├── checkout()
│   │   └── Notification system
│   │
│   └── main.js                        # Main utility module (50+ lines)
│       ├── Navigation utilities
│       ├── Event listeners
│       └── Analytics/logging
│
├── README.md                           # Project overview and quick start
├── DOCUMENTATION.md                    # This file - technical deep dive
├── API_REFERENCE.md                    # Complete API documentation
└── CONTRIBUTING.md                     # Contribution guidelines
```

---

## HTML Structure

### Document Head
```html
<head>
    <meta charset="UTF-8">                          <!-- Text encoding -->
    <meta name="viewport" ...>                      <!-- Mobile responsiveness -->
    <title>Luna Collective - Premium Lifestyle Marketplace</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
```

### Body Structure

**1. Navigation Bar**
- Fixed position (sticky)
- Contains: logo, search bar, nav links, cart icon
- Z-index: 100

**2. Hero Section**
- Full-width gradient background
- Call-to-action button
- Z-index: default

**3. Categories Section**
- 6 category cards in CSS Grid
- Click handlers for filtering

**4. Products Section**
- Dynamic grid (#productGrid) for product cards
- Populated by JavaScript

**5. Cart Sidebar**
- Fixed position right side
- Slides in on click
- Z-index: 200 (above navbar)

**6. Footer**
- Bottom of page
- 4-column layout (responsive)

### Semantic HTML
- `<nav>` for navigation
- `<section>` for content sections
- `<footer>` for footer
- `<main>` could be added around products
- Proper heading hierarchy (h1 → h2 → h3)

---

## CSS Organization

### Specificity Strategy
- Utility-first approach for reusability
- Low specificity (classes over IDs)
- Cascade leveraged for defaults
- Specificity score rarely exceeds 0,1,3

### CSS Variables (Custom Properties)
```css
:root {
    --primary: #7c3aed;        /* Brand purple */
    --secondary: #ec4899;      /* Brand pink */
    --dark: #1f2937;           /* Dark text */
    --light: #f3f4f6;          /* Light backgrounds */
    --white: #ffffff;          /* Pure white */
    --text: #374151;           /* Body text */
    --border: #e5e7eb;         /* Borders */
    --shadow: ...;             /* Shadows */
}
```

### Component Structure

**Naming Convention:** BEM-lite
- Block: `.navbar`, `.hero`, `.product-card`
- Element: `.navbar__logo`, `.product-info`
- Modifier: `.btn--primary`, `.btn--secondary`

### Responsive Design Strategy
- Mobile-first (base styles for mobile)
- Breakpoints: 480px, 768px, 1024px+
- Media queries add complexity, not replace

---

## JavaScript Modules

### Module 1: products.js

**Purpose:** Product catalog management and filtering

**Key Variables:**
```javascript
const products = [...]        // Array of product objects
```

**Product Object Schema:**
```javascript
{
    id: number,               // Unique identifier
    name: string,             // Product name
    category: string,         // Category slug
    seller: string,           // Seller name
    price: number,            // Price in USD
    image: string,            // Emoji or image URL
    description: string,      // Product description
    rating: number,           // Star rating (0-5)
    reviews: number           // Number of reviews
}
```

**Key Functions:**
- `renderProducts(array)` - Render products to DOM
- `filterByCategory(string)` - Filter by category
- `searchProducts()` - Search implementation
- Event listeners for search input

### Module 2: cart.js

**Purpose:** Shopping cart state and UI management

**State Management:**
```javascript
let cart = [];                // In-memory cart array
// Persisted to localStorage with key 'cart'
```

**Cart Item Schema:**
```javascript
{
    id: number,
    name: string,
    price: number,
    quantity: number,
    ... // All product properties
}
```

**Key Functions:**
- `addToCart(id)` - Add product to cart
- `removeFromCart(id)` - Remove from cart
- `updateCartDisplay()` - Update UI
- `toggleCart()` - Show/hide sidebar
- `checkout()` - Process checkout
- `clearCart()` - Empty cart
- `saveCart()` - Persist to localStorage
- `showNotification(msg)` - Toast notification

**LocalStorage:**
- Key: `'cart'`
- Format: JSON string of cart array
- Survives: Page refresh, tab closure
- Limit: ~5-10MB per domain (usually sufficient)

### Module 3: main.js

**Purpose:** General utilities and event management

**Key Functions:**
- `scrollToSection(id)` - Smooth scroll navigation
- `logEvent(name, data)` - Basic analytics logging
- Global event listeners for UI interactions

---

## Data Flow

### User Flow: Add to Cart
```
1. User clicks "Add to Cart" button
   ↓
2. Button calls addToCart(productId)
   ↓
3. Product is found in products array
   ↓
4. Check if product already in cart
   - Yes: Increment quantity
   - No: Add new item with quantity 1
   ↓
5. saveCart() → Serialize to JSON → localStorage.setItem()
   ↓
6. updateCartDisplay() → Refresh DOM
   ↓
7. showNotification() → Visual feedback
```

### User Flow: Search
```
1. User types in search input
   ↓
2. User presses Enter or clicks Search
   ↓
3. searchProducts() function executes
   ↓
4. Get search query from input field
   ↓
5. Filter products array:
   - Case-insensitive matching
   - Checks: name, description, seller, category
   - Returns matching products
   ↓
6. renderProducts(filtered) → Display results
   ↓
7. scrollToSection('products') → Auto-scroll to results
```

### Data Persistence
```
Application Start
   ↓
Load page (index.html)
   ↓
LoadCart Module (js/cart.js)
   ↓
Check localStorage for 'cart' key
   ↓
Parse JSON → Update cart variable
   ↓
RenderProducts() → Show products
   ↓
User Interactions → updateCartDisplay() → saveCart()
   ↓
Data Persisted in localStorage
```

---

## Component Documentation

### Component: Navigation Bar

**HTML Element:** `<nav class="navbar">`

**Sub-components:**
- `.logo` - Brand name
- `.search-bar` - Search input + button
- `.nav-links` - Navigation menu
- `.cart-icon` - Shopping cart button

**Functionality:**
- Sticky positioning (top: 0, z-index: 100)
- Search functionality integrated
- Cart count display (#cartCount)
- Responsive stacking on mobile

**CSS Classes:**
```css
.navbar               /* Container */
.nav-container       /* Inner wrapper */
.logo                /* Brand */
.search-bar          /* Search container */
.nav-links           /* Menu links */
.cart-icon           /* Cart button */
```

### Component: Product Card

**HTML Element:** `.product-card`

**Structure:**
```html
<div class="product-card">
    <div class="product-image">emoji</div>
    <div class="product-info">
        <span class="product-category">Category</span>
        <h3 class="product-name">Name</h3>
        <p class="product-seller">Seller</p>
        <p class="product-description">Description</p>
        <div class="product-rating">Rating</div>
        <div class="product-price">Price</div>
        <button class="add-to-cart-btn">Add to Cart</button>
    </div>
</div>
```

**Styling:**
- Box shadow with hover elevation
- Responsive grid layout
- Flex column for layout
- Interactive button states

### Component: Cart Sidebar

**HTML Element:** `<aside id="cartSidebar" class="cart-sidebar">`

**Sections:**
- `.cart-header` - Title + close button
- `.cart-items` - Dynamic item list
- `.cart-footer` - Total + checkout buttons

**Behavior:**
- Position: fixed right, -400px (off-screen)
- Active state: right: 0 (slide in)
- Transition: 0.3s ease
- Z-index: 200

**JavaScript Integration:**
```javascript
toggleCart()              // Show/hide
updateCartDisplay()       // Refresh items
removeFromCart(id)        // Item removal
```

---

## Styling Guide

### Adding New Styles

**1. New Component:**
```css
.new-component {
    /* Structure */
    display: flex;
    
    /* Colors */
    background: var(--white);
    color: var(--text);
    
    /* Spacing */
    padding: 1rem;
    margin: 0;
    
    /* Visual */
    border-radius: 8px;
    box-shadow: var(--shadow);
    
    /* Animation */
    transition: all 0.3s ease;
}

.new-component:hover {
    /* Interactive state */
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}
```

**2. Using CSS Variables:**
```css
/* Instead of hard-coded colors */
color: #7c3aed;              ❌ Bad
color: var(--primary);       ✅ Good
```

**3. Mobile Responsiveness:**
```css
/* Mobile-first in responsive.css */
@media (max-width: 768px) {
    .component {
        /* Tablet adjustments */
    }
}

@media (max-width: 480px) {
    .component {
        /* Mobile adjustments */
    }
}
```

---

## Performance Optimization

### Current Optimizations

**1. Rendering:**
- Products rendered once on load
- DOM updates minimal on cart changes
- Event delegation used for buttons

**2. Storage:**
- LocalStorage for cart (no server calls)
- All product data in memory (small dataset)
- No external API dependencies

**3. CSS:**
- Single CSS file (all styles)
- Minimal specificity (no unnecessary classes)
- Hardware acceleration via transform/opacity

**4. JavaScript:**
- Vanilla JS (no framework overhead)
- Efficient array methods (filter, find, reduce)
- Event listeners attached to elements (not nodes)

### Potential Improvements

```javascript
// 1. Lazy loading for images (future)
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadImage(entry.target);
        }
    });
});

// 2. Debounce search input
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// 3. Pagination for products (100+ items)
const pageSize = 12;
let currentPage = 1;

// 4. Web Workers for heavy computation
// const worker = new Worker('search-worker.js');
```

---

## Browser Compatibility

### Supported Browsers

| Browser | Minimum Version | Status |
|---------|-----------------|--------|
| Chrome | 90+ | ✅ Full support |
| Firefox | 88+ | ✅ Full support |
| Safari | 14+ | ✅ Full support |
| Edge | 90+ | ✅ Full support |
| iOS Safari | 14+ | ✅ Full support |
| Chrome Mobile | 90+ | ✅ Full support |

### Feature Compatibility

```javascript
// localStorage - All modern browsers
if (typeof(Storage) !== "undefined") {
    localStorage.setItem(key, value);
}

// CSS Grid - All modern browsers
.grid {
    display: grid; /* No fallback needed */
}

// CSS Custom Properties - All modern browsers
:root {
    --color: #000; /* No IE11 support */
}
```

### Fallbacks & Polyfills

No polyfills currently needed. Technologies used:
- **CSS Grid:** Native support in all target browsers
- **CSS Custom Properties:** Native support in all target browsers
- **Flexbox:** Native support in all target browsers
- **localStorage:** Native support in all target browsers
- **ES6 JavaScript:** All features used are supported in target browsers

---

## Debugging Guide

### Console Logging
```javascript
// Enable in main.js
console.log('Event:', eventName, eventData);
```

### LocalStorage Inspection
```javascript
// In browser console
localStorage.getItem('cart')  // View cart data
localStorage.clear()          // Clear all storage
localStorage.removeItem('cart') // Remove specific item
```

### DOM Inspection
- Right-click → Inspect Element
- Check applied styles
- Monitor CSS Grid layout
- Inspect event listeners

---

**Document Version:** 1.0
**Last Updated:** January 4, 2026
**Status:** Complete and Comprehensive