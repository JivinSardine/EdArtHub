// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = [];

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = {
      name: button.dataset.name,
      price: button.dataset.price,
      quantity: 1
    };
    cartItems.push(product);
    updateCartUI();
  });
});

// Update cart UI
function updateCartUI() {
  const cartSection = document.querySelector('.cart-section');
  cartSection.innerHTML = '';

  if (cartItems.length === 0) {
    cartSection.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    const cartTable = document.createElement('table');
    cartTable.innerHTML = `
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

    const cartBody = cartTable.querySelector('tbody');

    cartItems.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>
          <input type="number" value="${item.quantity}" min="1" class="quantity-input">
          <button class="remove-from-cart">Remove</button>
        </td>
        <td>$${(item.price * item.quantity).toFixed(2)}</td>
      `;
      cartBody.appendChild(row);
    });

    cartSection.appendChild(cartTable);

    // Add event listeners for quantity updates and removal
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const removeButtons = document.querySelectorAll('.remove-from-cart');

    quantityInputs.forEach((input, index) => {
      input.addEventListener('change', () => {
        cartItems[index].quantity = parseInt(input.value);
        updateCartUI();
      });
    });

    removeButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        cartItems.splice(index, 1);
        updateCartUI();
      });
    });
  }
}

// Google Pay integration
const googlePayButton = document.createElement('button');
googlePayButton.textContent = 'Pay with Google Pay';
googlePayButton.addEventListener('click', () => {
  // Implement Google Pay checkout process
  // Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = [];

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = {
      name: button.dataset.name,
      price: button.dataset.price,
      quantity: 1
    };
    cartItems.push(product);
    updateCartUI();
  });
});

// Update cart UI
function updateCartUI() {
  const cartSection = document.querySelector('.cart-section');
  cartSection.innerHTML = '';

  if (cartItems.length === 0) {
    cartSection.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    const cartTable = document.createElement('table');
    cartTable.innerHTML = `
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

    const cartBody = cartTable.querySelector('tbody');

    cartItems.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>
          <input type="number" value="${item.quantity}" min="1" class="quantity-input">
          <button class="remove-from-cart">Remove</button>
        </td>
        <td>$${(item.price * item.quantity).toFixed(2)}</td>
      `;
      cartBody.appendChild(row);
    });

    cartSection.appendChild(cartTable);

    // Add event listeners for quantity updates and removal
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const removeButtons = document.querySelectorAll('.remove-from-cart');

    quantityInputs.forEach((input, index) => {
      input.addEventListener('change', () => {
        cartItems[index].quantity = parseInt(input.value);
        updateCartUI();
      });
    });

    removeButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        cartItems.splice(index, 1);
        updateCartUI();
      });
    });
  }
}

// Google Pay integration
const googlePayButton = document.createElement('button');
googlePayButton.textContent = 'Pay with Google Pay';
googlePayButton.addEventListener('click', () => {
  // Implement Google Pay checkout process
});

const checkoutSection = document.querySelector('.cart-section');
checkoutSection.appendChild(googlePayButton);
});

const checkoutSection = document.querySelector('.cart-section');
checkoutSection.appendChild(googlePayButton);