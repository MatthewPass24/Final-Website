
//Shopping cart
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

let teamMembers = [
    {
        img: 'images/train1.jpg',
        name: 'Wooden Train',
        age: 'Toddler',
        price: '$25.99',
        rating: '5/5 stars',
        description: 'Pefect for those who have a passion for locomotives, the wooden train is a perfect toy for all children. Made from our finest wood our Tain is a must have.',
    },

    {
        img: 'images/plane1.jpg',
        name: 'Wooden Plane',
        age: 'Child',
        price: '$15.99',
        rating: '5/5 stars',
        description: 'A fun imaginitve plane perfect for young aviators. This toy is guaranteed to intrigue children. Also makes an intresting shelf ornament',
    },

    {
        img: 'images/car1.jpg',
        name: 'Wooden Car',
        age: 'Toddler',
        skills: ['skill 1', 'skill 2', 'skill 3'],
        price: '$17.99',
        rating: '5/5 stars',
        description: 'Vroom Vroom, a perfect adition to future speedsters toy collections. Made my strong oak wood, it is guranteed to last.',
    },
    {
        img: 'images/plane2.jpg',
        name: 'Wooden Plane (2) ',
        age: 'Child',
        price: '$20.99',
        rating: '5/5 stars',
        description: 'Similar to our original plane, it remains a fun imaginitve plane perfect for young aviators. The diffr',
    },
    {
        img: 'images/train3.jpg',
        name: 'Wooden Train',
        age: 'Toddler',
        price: '$15.99',
        rating: '5/5 stars',
        description: 'Another train for future conductors. This train does not come with the carts attached but still, the wooden train is a perfect toy for all children ',
    },
    {
        img: 'images/block2.jpg',
        name: 'Wooden Blocks',
        age: 'Child',
        price: '$5.99',
        rating: '5/5 stars',
        description: 'Blocks for imaginative youngsters, these are perfect for encouraging play that is tied to stimulating the brain.',
    },



]
function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards');
    teamMembers.forEach(member => {
        const card = document.createElement('item');
        card.classList.add('col-md-4');
        card.classList.add('col-sm-12');

        // Define background color based on position
    

        // Apply border color to the card-header
        let borderColor;
        switch (member.age) {
            case 'Toddler':
                borderColor = 'white';
                break;
            case 'Child':
                borderColor = 'white';
                break;
            case 'Teen':
                borderColor = 'white';
                break;
            case 'Tween':
                borderColor = 'white';
                break;
        }
        card.innerHTML = `
            <div class="card col-lg-4 col-md-6 col-sm-12 h-100">
                <div class="card-header text-center" style="border-color: ${borderColor};">${member.name}</div>
                <div class="card-body">
                    <img class="img-fluid" src="${member.img}">
                    <p><strong>Age Range:</strong> ${member.age}</p>
                    <p><strong>Price:</strong> ${member.price}</p>
                    <p><strong>Rating:</strong> ${member.rating}</p>
                    <p><strong>Description: </strong> ${member.description}</p>
                </div>
            </div>
        `;

        teamCardsContainer.appendChild(card);
    });
}

window.onload = generateTeamCards();
let listCards  = [];
function initApp(){
    teamMembers.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.img}">
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
        listCards[key] = JSON.parse(JSON.stringify(teamMembers[key]));
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
        listCards[key].price = quantity * teamMembers[key].price;
    }
    reloadCard();
}

document.getElementById("reset").addEventListener("click", function() {

    location.reload();
  })
