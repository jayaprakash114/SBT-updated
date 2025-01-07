
// // Array to store cart items
// let cart = [];

// // Function to render the cart dynamically
// function renderCart() {
//     const cartContainer = document.getElementById('cartContainer');
//     cartContainer.innerHTML = ''; // Clear previous cart content

//     if (cart.length === 0) {
//         cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//         return;
//     }

//     cart.forEach(item => {
//         const cartItem = `
//             <div class="col-lg-4 col-md-6">
//                 <div class="cart-item position-relative bg-light overflow-hidden h-100 shadow-sm">
//                     <img class="img-fluid w-100" src="${item.imageUrl}" alt="${item.name}" style="height: 250px; object-fit: cover;">
//                     <div class="text-center p-4">
//                         <h5 class="fw-bold mb-2">${item.name}</h5>
//                         <span class="text-primary me-1">Rs.${item.price}</span>
//                     </div>
//                     <div class="d-flex border-top">
//                         <small class="w-100 text-center py-2">
//                             <button class="text-body w-100 btn btn-danger remove-from-cart-btn" data-product-id="${item.id}">
//                                 <i class="fa fa-trash text-white me-2"></i>Remove
//                             </button>
//                         </small>
//                     </div>
//                 </div>
//             </div>
//         `;
//         cartContainer.innerHTML += cartItem;
//     });

//     // Add event listener to handle "Remove from Cart" click
//     const removeFromCartButtons = document.querySelectorAll('.remove-from-cart-btn');
//     removeFromCartButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             const productId = this.getAttribute('data-product-id');
//             removeFromCart(productId);
//         });
//     });
// }

// // Function to add a product to the cart
// function addToCart(product) {
//     // Check if the product is already in the cart
//     const existingProduct = cart.find(item => item.id === product.id);
//     if (!existingProduct) {
//         cart.push(product);
//         renderCart(); // Update the cart display
//         console.log(`Product with ID ${product.id} added to cart.`);
//     } else {
//         alert('This product is already in your cart.');
//     }
// }

// // Function to remove a product from the cart
// function removeFromCart(productId) {
//     cart = cart.filter(item => item.id !== productId);
//     renderCart(); // Update the cart display
//     console.log(`Product with ID ${productId} removed from cart.`);
// }

// // Modify the event listener in renderProducts to use addToCart
// function renderProducts(products) {
//     const productsContainer = document.getElementById('productsContainer');
//     productsContainer.innerHTML = ''; // Clear previous content

//     if (products.length === 0) {
//         productsContainer.innerHTML = '<p>No products available in this category.</p>';
//         return;
//     }

//     products.forEach(product => {
//         const productCard = `
//             <div class="col-lg-4 col-md-6">
//                 <div class="product-item position-relative bg-light overflow-hidden h-100 shadow-sm">
//                     <img class="img-fluid w-100" src="${product.imageUrl}" alt="${product.name}" style="height: 250px; object-fit: cover;">
//                     <div class="text-center p-4">
//                         <h5 class="fw-bold mb-2">${product.name}</h5>
//                         <span class="text-primary me-1">Rs.${product.price}</span>
//                     </div>
//                     <div class="d-flex border-top">
//                         <small class="w-100 text-center py-2">
//                             <button class="text-body w-100 btn btn-primary add-to-cart-btn" data-product-id="${product.id}">
//                                 <i class="fa fa-shopping-bag text-white me-2"></i>Add to cart
//                             </button>
//                         </small>
//                     </div>
//                 </div>
//             </div>
//         `;
//         productsContainer.innerHTML += productCard;
//     });

//     // Add event listener to handle "Add to Cart" click
//     const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             const productId = this.getAttribute('data-product-id');
//             const product = products.find(p => p.id === productId);
//             if (product) {
//                 addToCart(product);
//             }
//         });
//     });
// }

