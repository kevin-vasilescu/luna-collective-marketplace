# Luna Collective Marketplace - API Reference

## Complete Function and Variable Reference

---

## Table of Contents
1. [Product Module (products.js)](#product-module)
2. [Cart Module (cart.js)](#cart-module)
3. [Main Module (main.js)](#main-module)
4. [Data Structures](#data-structures)
5. [Event Handlers](#event-handlers)
6. [DOM Elements](#dom-elements)

---

## Product Module

File: `js/products.js`

### Variables

#### `products` (Array of Objects)
**Type:** `Array<ProductObject>`

**Description:** Master product database containing all 12 products

**Schema:**
```javascript
{
    id: number,              // Unique product ID (1-12)
    name: string,            // Product name
    category: string,        // Category slug (fashion|home|wellness|jewelry|accessories|artisan)
    seller: string,          // Seller/brand name
    price: number,           // Price in USD (decimal)
    image: string,           // Unicode emoji representing product
    description: string,     // Short product description (50-100 chars)
    rating: number,          // Star rating (4.6-4.9)
    reviews: number          // Number of customer reviews
}
```

**Example:**
```javascript
{
    id: 1,
    name: 'Silk Blend Scarf',
    category: 'fashion',
    seller: 'Luna Textiles',
    price: 89.99,
    image: '🧣',
    description: 'Luxurious silk-cotton blend scarf with vibrant patterns',
    rating: 4.8,
    reviews: 156
}
```

---

### Functions

#### `renderProducts(productsToShow)`

**Description:** Render products to the DOM grid

**Parameters:**
- `productsToShow` (Array<ProductObject>, optional): Products to render. Defaults to all products.

**Return Value:** `undefined` (DOM is modified directly)

**Side Effects:** 
- Clears #productGrid
- Creates product card elements
- Attaches click handlers

**Example:**
```javascript
// Render all products
renderProducts();

// Render filtered products
const fashionItems = products.filter(p => p.category === 'fashion');
renderProducts(fashionItems);
```

**HTML Generated:**
```html
<div class="product-card">
    <div class="product-image">emoji</div>
    <div class="product-info">
        <span class="product-category">category</span>
        <h3 class="product-name">name</h3>
        <!-- ... more content ... -->
        <button class="add-to-cart-btn" onclick="addToCart(id)">Add to Cart</button>
    </div>
</div>
```

---

#### `filterByCategory(category)`

**Description:** Filter products by category and render results

**Parameters:**
- `category` (string): Category slug to filter by
  - Valid values: `'fashion'`, `'home'`, `'wellness'`, `'jewelry'`, `'accessories'`, `'artisan'`

**Return Value:** `undefined`

**Side Effects:**
- Filters product array
- Calls renderProducts() with filtered array
- Scrolls to products section

**Example:**
```javascript
filterByCategory('jewelry');  // Show only jewelry products
filterByCategory('wellness');  // Show only wellness products
```

**Algorithm:**
```javascript
const filtered = products.filter(p => p.category === category);
renderProducts(filtered);
scrollToSection('products');
```

---

#### `searchProducts()`

**Description:** Search products by keyword from search input

**Parameters:** None (reads from #searchInput DOM element)

**Return Value:** `undefined`

**Side Effects:**
- Reads input value
- Filters product array
- Renders results or "no results" message
- Scrolls to products section

**Search Behavior:**
- Case-insensitive matching
- Searches across: name, description, seller, category
- Uses substring matching (contains logic)
- Empty results show friendly message

**Example:**
```javascript
// Assume user typed "scarf" in search input
searchProducts();
// Results: Products containing "scarf" in name, description, seller, or category
```

**Search Logic:**
```javascript
const query = searchInput.value.toLowerCase();
const filtered = products.filter(p => 
    p.name.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query) ||
    p.seller.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
);
```

---

### Event Listeners

#### Search Input
**Trigger:** Enter key in #searchInput

**Handler:**
```javascript
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProducts();
    }
});
```

#### Category Card Click
**Trigger:** Click on category card

**Handler:**
```html
<div class="category-card" onclick="filterByCategory('fashion')">
```

---

## Cart Module

File: `js/cart.js`

### Variables

#### `cart` (Array)

**Type:** `Array<CartItemObject>`

**Description:** In-memory shopping cart array, persisted to localStorage

**Schema:**
```javascript
[
  {
    id: number,              // Product ID
    name: string,            // Product name
    category: string,        // Product category
    seller: string,          // Seller name
    price: number,           // Unit price
    image: string,           // Product emoji
    description: string,     // Product description
    rating: number,          // Rating
    reviews: number,         // Review count
    quantity: number         // Items in cart (1+)
  },
  // More items...
]
```

**Persistence:**
- Stored in localStorage with key `'cart'`
- Survives page refresh
- Cleared only by user action

**Example:**
```javascript
cart = [
  {
    ...productData,
    quantity: 2
  }
];
localStorage.getItem('cart'); // Returns JSON string
```

---

### Functions

#### `addToCart(productId)`

**Description:** Add product to cart or increment quantity if exists

**Parameters:**
- `productId` (number): ID of product to add (1-12)

**Return Value:** `undefined`

**Side Effects:**
- Modifies cart array
- Calls saveCart()
- Calls updateCartDisplay()
- Shows notification

**Logic:**
```javascript
const product = products.find(p => p.id === productId);
const existingItem = cart.find(item => item.id === productId);

if (existingItem) {
    existingItem.quantity += 1;
} else {
    cart.push({ ...product, quantity: 1 });
}

saveCart();
updateCartDisplay();
showNotification(`${product.name} added to cart!`);
```

**Example:**
```javascript
addToCart(1);  // Add silk scarf to cart
addToCart(1);  // Increase quantity to 2
```

---

#### `removeFromCart(productId)`

**Description:** Remove product from cart

**Parameters:**
- `productId` (number): ID of product to remove

**Return Value:** `undefined`

**Side Effects:**
- Removes item from cart array
- Calls saveCart()
- Calls updateCartDisplay()

**Logic:**
```javascript
cart = cart.filter(item => item.id !== productId);
saveCart();
updateCartDisplay();
```

**Example:**
```javascript
removeFromCart(1);  // Remove silk scarf from cart
```

---

#### `updateCartDisplay()`

**Description:** Update cart UI with current cart state

**Parameters:** None

**Return Value:** `undefined`

**Side Effects:**
- Updates #cartCount text
- Clears #cartItems
- Renders cart items
- Calculates and displays total in #cartTotal

**DOM Updates:**
```javascript
// Updates these elements:
#cartCount        // Item count
#cartItems        // Item list
#cartTotal        // Total price
```

**Logic Flow:**
1. Calculate total items: `cart.reduce((sum, item) => sum + item.quantity, 0)`
2. Update count in navbar
3. Render each cart item with remove button
4. Calculate total price: `cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)`
5. Display formatted total

**Example:**
```javascript
updateCartDisplay();
// Cart now shows:
// - Item count in navbar
// - List of items with quantities
// - Total price
```

---

#### `saveCart()`

**Description:** Persist cart to browser localStorage

**Parameters:** None

**Return Value:** `undefined`

**Side Effects:**
- Serializes cart array to JSON
- Stores in localStorage with key 'cart'

**Implementation:**
```javascript
localStorage.setItem('cart', JSON.stringify(cart));
```

**Example:**
```javascript
saveCart();
// localStorage['cart'] now contains JSON representation

// To retrieve:
const savedCart = JSON.parse(localStorage.getItem('cart'));
```

---

#### `toggleCart()`

**Description:** Show/hide cart sidebar

**Parameters:** None

**Return Value:** `undefined`

**Side Effects:**
- Toggles 'active' class on #cartSidebar
- Sidebar slides in/out with CSS transition

**Implementation:**
```javascript
const cartSidebar = document.getElementById('cartSidebar');
cartSidebar.classList.toggle('active');
```

**CSS Classes:**
- `.cart-sidebar` - Base styles (right: -400px)
- `.cart-sidebar.active` - Active state (right: 0)

**Example:**
```javascript
toggleCart();  // Show sidebar
toggleCart();  // Hide sidebar
```

---

#### `checkout()`

**Description:** Process checkout (demo implementation)

**Parameters:** None

**Return Value:** `undefined`

**Side Effects:**
- Shows alert with order summary
- Clears cart
- Closes cart sidebar
- Updates cart display

**Alert Content:**
```
Proceeding to checkout...

Total: $XXX.XX

Thank you for your purchase!
```

**Implementation:**
```javascript
if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
}

const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
alert(`Proceeding to checkout...\n\nTotal: $${total.toFixed(2)}...`);
cart = [];
saveCart();
updateCartDisplay();
toggleCart();
```

**Example:**
```javascript
checkout();  // Process order
```

---

#### `clearCart()`

**Description:** Remove all items from cart with confirmation

**Parameters:** None

**Return Value:** `undefined`

**Side Effects:**
- Shows confirmation dialog
- If confirmed, clears cart array
- Updates display
- Shows notification

**Implementation:**
```javascript
if (confirm('Are you sure you want to clear your cart?')) {
    cart = [];
    saveCart();
    updateCartDisplay();
    showNotification('Cart cleared');
}
```

**Example:**
```javascript
clearCart();  // Prompt user, then clear if confirmed
```

---

#### `showNotification(message)`

**Description:** Display temporary toast notification

**Parameters:**
- `message` (string): Notification text

**Return Value:** `undefined`

**Side Effects:**
- Creates temporary DOM element
- Injects into page
- Removes after 2000ms with animation

**Styling:**
```javascript
notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background: #7c3aed;
    color: white;
    padding: 1rem 2rem;
    border-radius: 8px;
    z-index: 250;
    animation: slideIn 0.3s ease;
`;
```

**Animation:**
- `slideIn` - 0.3s (notification appears)
- `slideOut` - 0.3s (notification disappears)

**Example:**
```javascript
showNotification('Product added to cart!');
// Notification appears, automatically disappears after 2 seconds
```

---

## Main Module

File: `js/main.js`

### Functions

#### `scrollToSection(sectionId)`

**Description:** Smooth scroll to page section

**Parameters:**
- `sectionId` (string): HTML ID of element to scroll to

**Return Value:** `undefined`

**Browser API:**
```javascript
element.scrollIntoView({ behavior: 'smooth' });
```

**Example:**
```javascript
scrollToSection('products');      // Scroll to products section
scrollToSection('home');          // Scroll to hero
scrollToSection('categories');    // Scroll to categories
```

---

#### `logEvent(eventName, eventData)`

**Description:** Log event for analytics (placeholder)

**Parameters:**
- `eventName` (string): Name of event
- `eventData` (object): Event details

**Return Value:** `undefined`

**Implementation:**
```javascript
console.log(`Event: ${eventName}`, eventData);
```

**Example:**
```javascript
logEvent('page_view', {
    page: 'marketplace_home',
    timestamp: new Date()
});

logEvent('product_add', {
    productId: 5,
    productName: 'Leather Tote Bag',
    timestamp: new Date()
});
```

---

### Event Listeners

#### Document Click - Close Cart
**Trigger:** Click anywhere on page except cart elements

**Handler:**
```javascript
document.addEventListener('click', function(event) {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (!cartSidebar.contains(event.target) && !cartIcon.contains(event.target)) {
        cartSidebar.classList.remove('active');
    }
});
```

**Behavior:** Closes cart sidebar when clicking outside

#### Window Resize
**Trigger:** Window resize event

**Handler:**
```javascript
window.addEventListener('resize', function() {
    // Close cart sidebar on resize to smaller screen
    if (window.innerWidth <= 768) {
        cartSidebar.classList.remove('active');
    }
});
```

---

## Data Structures

### ProductObject
```javascript
type ProductObject = {
    id: number,              // 1-12
    name: string,            // Product name
    category: string,        // Category slug
    seller: string,          // Seller/brand
    price: number,           // USD price
    image: string,           // Emoji
    description: string,     // Short description
    rating: number,          // 4.6-4.9
    reviews: number          // Number count
};
```

### CartItemObject
```javascript
type CartItemObject = ProductObject & {
    quantity: number         // 1+
};
```

---

## Event Handlers

### Button Events

| Element | Event | Handler | Effect |
|---------|-------|---------|--------|
| `.add-to-cart-btn` | click | `addToCart(id)` | Add product to cart |
| `.remove-btn` | click | `removeFromCart(id)` | Remove from cart |
| `.checkout-btn` | click | `checkout()` | Process checkout |
| `.clear-btn` | click | `clearCart()` | Empty cart |
| `.cta-btn` | click | `scrollToSection('products')` | Scroll to products |
| `.category-card` | click | `filterByCategory(cat)` | Filter products |
| `.cart-icon` | click | `toggleCart()` | Show/hide cart |

### Input Events

| Element | Event | Handler | Effect |
|---------|-------|---------|--------|
| `#searchInput` | keypress | `searchProducts()` if Enter | Search on Enter |
| `.search-bar button` | click | `searchProducts()` | Search on button click |

---

## DOM Elements Reference

### IDs
```javascript
#searchInput         // Search input field
#cartCount           // Cart item count display
#productGrid         // Product grid container
#cartSidebar         // Cart sidebar panel
#cartItems           // Cart items list
#cartTotal           // Cart total price
```

### Classes
```javascript
.navbar              // Navigation bar
.product-card        // Product card container
.product-image       // Product image/emoji
.product-info        // Product information
.add-to-cart-btn     // Add to cart button
.cart-sidebar        // Cart sidebar
.cart-sidebar.active // Cart sidebar visible
.cart-item           // Individual cart item
.category-card       // Category card
```

---

## Constants & Configuration

### CartSidebar Width
```javascript
400px   // Desktop width
320px   // Mobile width (responsive.css)
280px   // Extra small width (responsive.css)
```

### Animation Duration
```javascript
0.3s    // Cart sidebar slide
2000ms  // Notification display time
```

### CSS Colors
```javascript
var(--primary)     // #7c3aed (purple)
var(--secondary)   // #ec4899 (pink)
var(--dark)        // #1f2937 (dark)
var(--light)       // #f3f4f6 (light)
```

---

## Examples & Usage Patterns

### Complete User Journey

```javascript
// 1. User navigates to site
// index.html loads
// products.js initializes products array
// cart.js loads cart from localStorage (or empty)
// renderProducts() displays all 12 products

// 2. User searches for "leather"
document.getElementById('searchInput').value = 'leather';
searchProducts();
// Filters to: Leather Tote Bag
// renderProducts(filtered) displays result

// 3. User clicks "Add to Cart" on Leather Tote Bag
addToCart(5);
// addToCart logic:
// - Finds product with id: 5
// - Checks if already in cart (no)
// - Adds: {...productData, quantity: 1}
// - Calls saveCart() → localStorage updated
// - Calls updateCartDisplay() → UI updated
// - showNotification() → "Leather Tote Bag added to cart!"

// 4. User clicks cart icon
toggleCart();
// cartSidebar toggles 'active' class
// Sidebar slides in from right
// updateCartDisplay() shows item

// 5. User clicks "Proceed to Checkout"
checkout();
// - Shows alert with total
// - Clears cart array
// - Saves empty cart
// - Updates display (empty message)
// - Closes sidebar

// 6. User closes browser
// localStorage persists cart (if not cleared)
```

---

**API Reference Version:** 1.0
**Last Updated:** January 4, 2026
**Status:** Complete