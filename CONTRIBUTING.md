# Contributing to Luna Collective Marketplace

## Welcome, Contributors! 🌙

Thank you for your interest in contributing to Luna Collective! This document provides guidelines and instructions for contributing.

---

## Code of Conduct

- Be respectful and inclusive
- Welcome feedback and different perspectives
- Focus on what's best for the community
- Report unacceptable behavior to project maintainers

---

## How to Contribute

### 1. Reporting Bugs

**Before submitting:**
- Check existing issues (may be already reported)
- Verify the bug is reproducible
- Test in different browsers if applicable

**When submitting:**
- Use clear, descriptive title
- Describe exact steps to reproduce
- Provide expected vs actual behavior
- Include browser/device information
- Attach screenshots if relevant

**Example Issue:**
```
Title: Shopping cart total calculation incorrect with multiple quantities

Steps:
1. Add product with price $89.99 to cart (quantity: 2)
2. Add product with price $45.99 to cart (quantity: 1)
3. Check total displayed

Expected: $225.97
Actual: $180.97

Browser: Chrome 120 on Windows 11
```

---

### 2. Suggesting Enhancements

**Before suggesting:**
- Check if feature already exists
- Check issue backlog
- Ensure feature aligns with project scope

**When suggesting:**
- Use descriptive title
- Explain current limitations
- Describe proposed solution
- List potential benefits
- Provide usage examples

**Example Enhancement:**
```
Title: Add product quantity spinner in product card

Current: Users can only add 1 item at a time via "Add to Cart" button

Proposal: Add +/- buttons to increase/decrease quantity before adding

Benefit: Better UX, reduce clicks, matches industry standards

Example:
[Item Qty:] [- button] [1] [+ button] [Add to Cart]
```

---

### 3. Pull Requests

#### Setup
1. Fork the repository
2. Clone your fork
   ```bash
   git clone https://github.com/YOUR-USERNAME/luna-collective-marketplace.git
   ```
3. Create feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```

#### Making Changes

**Code Style:**
- Use descriptive variable names
- Add comments for complex logic
- Maintain existing indentation (4 spaces)
- Keep functions focused and small

**File Structure:**
- Keep HTML in `index.html`
- Keep CSS in appropriate files (`css/`)
- Keep JavaScript modular (`js/`)

**Example PR Code:**
```javascript
// ❌ Avoid
function f(a) {
    for(var i=0;i<a.length;i++)
        console.log(a[i]);
}

// ✅ Do
function logProducts(productArray) {
    productArray.forEach(product => {
        console.log(`Product: ${product.name}`);
    });
}
```

#### Testing
- Test in multiple browsers (Chrome, Firefox, Safari)
- Test on mobile and desktop
- Verify responsive design at breakpoints
- Check console for errors
- Test cart persistence (refresh page)

#### Commit Messages

**Format:**
```
<type>: <subject>

<body>

<footer>
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting/styling
- `refactor:` - Code refactoring
- `perf:` - Performance improvement
- `test:` - Adding tests

**Examples:**
```
feat: Add product wishlist functionality

Implements user ability to save products for later.
- New wishlist array in localStorage
- Heart icon on product cards
- Wishlist page with saved items

Closes #42

---

fix: Cart total calculation with decimal prices

Fixed rounding error causing incorrect totals with
multiple decimal-place prices.

Related to issue #15

---

docs: Add API reference for cart functions

Comprehensive documentation of all cart module functions
including parameters, return values, and examples.
```

#### Push and Pull Request

1. Commit changes
   ```bash
   git commit -m "feat: Your feature description"
   ```

2. Push to fork
   ```bash
   git push origin feature/amazing-feature
   ```

3. Open Pull Request on GitHub
   - Clear title describing changes
   - Description of what and why
   - Link related issues
   - Screenshots of changes if UI-related

**PR Template:**
```markdown
## Description
Brief explanation of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## How Has This Been Tested?
- Browser: Chrome, Firefox, Safari
- Device: Desktop, Mobile
- [x] Responsive design verified
- [x] No console errors

## Screenshots (if applicable)
[Add screenshots here]

## Checklist
- [x] Code follows style guidelines
- [x] Self-review completed
- [x] Comments added for complex logic
- [x] Documentation updated
- [x] No breaking changes

## Related Issues
Closes #123
Related to #456
```

---

## Development Guide

### Project Structure
```
Files are organized as:
- index.html - Main markup
- css/ - Stylesheets
- js/ - JavaScript modules
- docs/ - Documentation
```

### Adding New Features

**Example: Add Product Filter by Price**

1. **Modify HTML** (index.html)
   ```html
   <input id="priceFilter" type="range" min="0" max="500">
   ```

2. **Add CSS** (css/styles.css)
   ```css
   #priceFilter {
       width: 100%;
       cursor: pointer;
   }
   ```

3. **Add JavaScript** (js/products.js)
   ```javascript
   function filterByPrice(maxPrice) {
       const filtered = products.filter(p => p.price <= maxPrice);
       renderProducts(filtered);
   }
   
   // Add event listener
   document.getElementById('priceFilter')?.addEventListener('change', (e) => {
       filterByPrice(e.target.value);
   });
   ```

4. **Update Documentation**
   - README.md - Add feature to list
   - DOCUMENTATION.md - Add function details
   - API_REFERENCE.md - Add function reference

5. **Test thoroughly**
   - Multiple price ranges
   - Mobile responsiveness
   - Browser compatibility

---

## Documentation

### What to Document
- New functions
- New features
- Breaking changes
- Complex logic
- Configuration options

### Where to Update
1. **README.md** - Overview and quick start
2. **DOCUMENTATION.md** - Technical details
3. **API_REFERENCE.md** - Complete function reference
4. **Code comments** - Complex implementations

### Documentation Example
```javascript
/**
 * Filter products by price range
 * @param {number} minPrice - Minimum price in USD
 * @param {number} maxPrice - Maximum price in USD
 * @returns {Array} Filtered product array
 */
function filterByPrice(minPrice, maxPrice) {
    return products.filter(p => p.price >= minPrice && p.price <= maxPrice);
}
```

---

## Review Process

All contributions are reviewed. Reviewers may:
- Request changes
- Suggest improvements
- Ask clarifying questions
- Approve and merge

**Review Criteria:**
- Code quality and style
- Test coverage
- Documentation completeness
- Browser compatibility
- Performance impact
- Security implications

---

## Community

### Getting Help
- Check existing documentation
- Review similar PRs/issues
- Open a discussion issue
- Ask in comments respectfully

### Recognition
Contributors are recognized in:
- README.md contributors section
- Commit history
- Release notes

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## Questions?

- Review documentation files
- Check existing issues/PRs
- Open a new discussion
- Be respectful and patient

**Thank you for making Luna Collective better! 🌙**

---

**Document Version:** 1.0
**Last Updated:** January 4, 2026