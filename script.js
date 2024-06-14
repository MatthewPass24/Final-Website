let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'Wooden Train Set',
        image: 'images/file (4).jpg',
        age: '3+',
        description: 'Embark on a charming journey with this beautiful handcrafted wooden train set. ',
        price: 25.49
    },
    {
        id: 2,
        name: 'Wooden Plane',
        image: 'images/file (1).jpg',
        age: 'Toddlers',
        description: 'Soar through the imaginative skies with this classic wooden airplane.',
        price: 20.99
    },
    {
        id: 3,
        name: 'Wooden Car',
        image: 'images/file (5).jpg',
        age: 'All Ages',
        description: 'This heirloom-quality wooden car is a timeless treasure fit for all. ',
        price: 16.99
    },
    {
        id: 4,
        name: 'Wooden Boat ',
        image: 'images/file (3).jpg',
        age: 'All Ages',
        description: 'Set sail for bathtub adventures with this adorable wooden boat.',
        price: 20.99,
    },
    {
        id: 5,
        name: 'Wooden Train',
        image: 'images/train3.jpg',
        age: '3+',
        description: 'Engine and car boasts intricate details made from real beech wood. ',
        price: 15.99,
    },
    {
        id: 6,
        name: 'Wooden Blocks',
        image: 'images/block2.jpg',
        age: '3+',
        description: 'Build creativity and imagination with this high-quality, 72-piece block set. ',
        price: 12.99,
    }
];

// Check if there are items in the cart in local storage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function generateProductCards() {
    const productCardsContainer = document.getElementById('productCards');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4');

        card.innerHTML = `
        <div class="card text-dark" id="card">
            <div class="card-header">
                <h2>${product.name}</h2>
            </div>
            <div class="card-body">
            <div class="image">
                <div class="card-image">
                    <img src="${product.image}" class="img-fluid image__img" style="min-height: 250px; height: 275px;">
                </div>
                <div class="card-body py-1" style="background-color:${backgroundColor};">
                    <p><strong>Age:</strong> ${product.age}</p>
                    <p><strong>Description:</strong> ${product.description}</p>
                    <p><strong>Price: </strong>$${product.price}</p> 
                    <button onclick="addToCart(${product.id})">Add To Cart</button>
                </div>
                </div>
            </div>  
        </div>`;
        productCardsContainer.appendChild(card);

    });
}


function initApp() {
    products.forEach(product => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="title my-2"><h3>${product.name}</h3></div>
            <img src="${product.image}">
            <div class="age"><p><strong>Age: </strong>${product.age}</p></div>
            <div class="description"><p><strong>Description: </strong>${product.description}</p></div>
            <div class="price"><p>$${product.price.toLocaleString()}</p></div>
            <button onclick="addToCart(${product.id})"><p>Add To Cart</p></button>`;
        list.appendChild(newDiv);
    });

    // Populate cart with items from local storage
    reloadCart();
}

function addToCart(productId) {
    // Find the product by its ID
    const product = products.find(item => item.id === productId);

    // Check if the product is already in the cart
    const existingItemIndex = cartItems.findIndex(item => item.id === productId);

    if (existingItemIndex !== -1) {
        // If the product is already in the cart, increase its quantity
        cartItems[existingItemIndex].quantity++;
    } else {
        // If the product is not in the cart, add it with quantity 1
        cartItems.push({ ...product, quantity: 1 });
    }

    // Save the updated cart to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Reload the cart display
    reloadCart();
}

function reloadCart() {
    listCard.innerHTML = '';

    let count = 0;
    let totalPrice = 0;

    cartItems.forEach((item, index) => {
        totalPrice += item.price * item.quantity;
        count += item.quantity;

        let newDiv = document.createElement('li');
        newDiv.innerHTML = `
            <div><img src="${item.image}"/></div>
            <div>${item.name}</div>
            <div>${(item.price * item.quantity).toLocaleString()}</div>
            <div>
                <button onclick="changeQuantity(${index}, ${item.quantity - 1})">-</button>
                <div class="count">${item.quantity}</div>
                <button onclick="changeQuantity(${index}, ${item.quantity + 1})">+</button>
            </div>`;
        listCard.appendChild(newDiv);
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(index, quantity) {
    if (quantity <= 0) {
        // If quantity is 0 or less, remove the item from the cart
        cartItems.splice(index, 1);
    } else {
        // Update the quantity of the item in the cart
        cartItems[index].quantity = quantity;
    }

    // Save the updated cart to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Reload the cart display
    reloadCart();
}

// Get the button element
let backToTopBtn = document.getElementById("back-to-top-btn");

// Show or hide the button based on scroll position
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
        // Show the button
        backToTopBtn.style.display = "block";
    } else {
        // Hide the button
        backToTopBtn.style.display = "none";
    }
});

// Scroll to the top when the button is clicked
backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Initialize the application
initApp();

