let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Wooden Train',
        image: 'images/file (4).jpg',
        price: 25.49
    },
    {
        id: 2,
        name: 'Wooden Plane',
        image: 'images/file (1).jpg',
        price: 20.99
    },
    {
        id: 3,
        name: 'Wooden Car',
        image: 'images/file (5).jpg',
        price: 16.99
    },
    {
        id: 4,
        name: 'Wooden Boat ',
        image: 'images/file (3).jpg',
        age: 'Child',
        price: 20.99,
    },
    {
        id: 5,
        name: 'Wooden Train',
        image: 'images/train3.jpg',
        age: 'Child',
        price: 15.99,
    },
    {
        id: 6, 
        name: 'Wooden Blocks', 
        image: 'images/block2.jpg',
        age: 'Child',
        price: 12.99,
       
    }

];
function generateProductCards() {
    const productCardsContainer = document.getElementById('productCards');
  
    productsInfo.forEach(product => {
        const card = document.createElement('div')
        card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4')

  
        card.innerHTML = `
        <div class = "card text-dark">
          <div class = "card-header">
              ${product.product}
          </div>
          <div class = "card-image">
            <img src="${product.image}" class="img-fluid" style="min-height: 250px; height: 275px;">
          </div>
          <div class = "card-body py-1" style="background-color:$     {backgroundColor};">
            <p><strong>Price: </strong>$${product.price}</p> 
          </div>
        </div>  
        </div>
    `;
        productCardsContainer.appendChild(card);
  
    });
  }
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
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