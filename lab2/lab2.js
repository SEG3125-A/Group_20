// Customer Preferences
function getCustomerPreferences() {
  const vegetarian = document.getElementById('vegetarian').checked;
  const glutenFree = document.getElementById('glutenFree').checked;
  const organic = document.getElementById('organic').checked;
  return { vegetarian, glutenFree, organic };
}

function handleCustomerPreferences(event) {
  event.preventDefault();
  const preferences = getCustomerPreferences();
  const sortedAndFilteredProducts = sortProductsByPrice(filterProducts(preferences));
  displayProducts(sortedAndFilteredProducts);
}

// Product Display
function displayProducts(filteredProducts) {
  const productsContainer = document.getElementById('products-container');
  productsContainer.innerHTML = '';
  filteredProducts.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(productElement);
  });
}

// Cart Display
function displayCart() {
  const cartContainer = document.getElementById('cart-container');
  const totalContainer = document.getElementById('total-container');

  cartContainer.innerHTML = '';
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    itemElement.innerHTML = `
      <h4>${item.name}</h4>
      <p>$${item.price.toFixed(2)}</p>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartContainer.appendChild(itemElement);
  });

  const total = calculateTotal();
  totalContainer.textContent = `Total: $${total.toFixed(2)}`;
}

// Add to Cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  displayCart();
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  displayCart();
}

// Calculate Total
function calculateTotal() {
  return cart.reduce((total, item) => total + item.price, 0);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('preferences-form').addEventListener('submit', handleCustomerPreferences);
  displayProducts(sortProductsByPrice(products));
});

// Products and Cart Initialization
const products = [
  { id: 1, name: "Banana", price: 0.99, isVegetarian: true, isGlutenFree: true, isOrganic: false },
  { id: 2, name: "Organic Avocado", price: 1.99, isVegetarian: true, isGlutenFree: true, isOrganic: true },
  { id: 3, name: "Chicken Breast", price: 5.49, isVegetarian: false, isGlutenFree: true, isOrganic: false },
  { id: 4, name: "Almond Milk", price: 2.99, isVegetarian: true, isGlutenFree: true, isOrganic: false },
  { id: 5, name: "Whole Wheat Bread", price: 2.99, isVegetarian: true, isGlutenFree: false, isOrganic: false },
  { id: 6, name: "Organic Spinach", price: 2.50, isVegetarian: true, isGlutenFree: true, isOrganic: true },
  { id: 7, name: "Quinoa", price: 4.50, isVegetarian: true, isGlutenFree: true, isOrganic: true },
  { id: 8, name: "Cheddar Cheese", price: 2.75, isVegetarian: true, isGlutenFree: true, isOrganic: false },
  { id: 9, name: "Ground Coffee", price: 6.99, isVegetarian: true, isGlutenFree: true, isOrganic: false },
  { id: 10, name: "Tofu", price: 2.20, isVegetarian: true, isGlutenFree: true, isOrganic: false }
];

let cart = [];
