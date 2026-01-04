// Product Database
const products = [
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
    },
    {
        id: 2,
        name: 'Ceramic Vase Set',
        category: 'home',
        seller: 'Pottery House',
        price: 129.99,
        image: '🏺',
        description: 'Handcrafted ceramic vases, set of 3, minimalist design',
        rating: 4.9,
        reviews: 89
    },
    {
        id: 3,
        name: 'Lavender Diffuser',
        category: 'wellness',
        seller: 'Zen Wellness',
        price: 45.99,
        image: '🌿',
        description: 'Essential oil diffuser with 5 essential oil blends',
        rating: 4.7,
        reviews: 234
    },
    {
        id: 4,
        name: 'Pearl Earrings',
        category: 'jewelry',
        seller: 'Luminous Jewelry',
        price: 159.99,
        image: '💎',
        description: 'Authentic freshwater pearl drop earrings, sterling silver',
        rating: 4.9,
        reviews: 124
    },
    {
        id: 5,
        name: 'Leather Tote Bag',
        category: 'accessories',
        seller: 'Urban Leather',
        price: 199.99,
        image: '👜',
        description: 'Premium Italian leather tote with multiple compartments',
        rating: 4.8,
        reviews: 267
    },
    {
        id: 6,
        name: 'Hand-Knit Blanket',
        category: 'artisan',
        seller: 'Cozy Creations',
        price: 149.99,
        image: '🧶',
        description: 'Soft wool blend hand-knitted throw blanket, natural dyes',
        rating: 4.9,
        reviews: 178
    },
    {
        id: 7,
        name: 'Linen Shirt',
        category: 'fashion',
        seller: 'Minimalist Fashion',
        price: 79.99,
        image: '👔',
        description: 'Pure linen short-sleeve shirt, breathable and durable',
        rating: 4.6,
        reviews: 92
    },
    {
        id: 8,
        name: 'Bamboo Cutting Board',
        category: 'home',
        seller: 'Eco Living',
        price: 34.99,
        image: '🥘',
        description: 'Sustainable bamboo cutting board set with storage',
        rating: 4.7,
        reviews: 145
    },
    {
        id: 9,
        name: 'Yoga Mat',
        category: 'wellness',
        seller: 'FlexFlow Wellness',
        price: 69.99,
        image: '🧘',
        description: 'Premium natural rubber yoga mat, non-slip surface',
        rating: 4.8,
        reviews: 312
    },
    {
        id: 10,
        name: 'Gold Bracelet',
        category: 'jewelry',
        seller: 'Luminous Jewelry',
        price: 249.99,
        image: '✨',
        description: '14K gold-plated statement bracelet with gemstones',
        rating: 4.9,
        reviews: 87
    },
    {
        id: 11,
        name: 'Silk Sleep Mask',
        category: 'accessories',
        seller: 'Luxury Rest',
        price: 34.99,
        image: '😴',
        description: 'Mulberry silk sleep mask, hypoallergenic and soft',
        rating: 4.8,
        reviews: 203
    },
    {
        id: 12,
        name: 'Wooden Sculpture',
        category: 'artisan',
        seller: 'Wood Art Studio',
        price: 179.99,
        image: '🎨',
        description: 'Hand-carved wooden sculpture, abstract design',
        rating: 4.9,
        reviews: 45
    }
];

// Render products on page load
function renderProducts(productsToShow = products) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-seller">by ${product.seller}</p>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <span class="rating-stars">★ ${product.rating}</span>
                    <span class="rating-count">(${product.reviews} reviews)</span>
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Filter products by category
function filterByCategory(category) {
    const filtered = products.filter(p => p.category === category);
    renderProducts(filtered);
    scrollToSection('products');
}

// Search products
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase();

    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.seller.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        const productGrid = document.getElementById('productGrid');
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #999;">No products found matching your search.</p>';
    } else {
        renderProducts(filtered);
    }

    scrollToSection('products');
}

// Allow search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
    renderProducts();
});