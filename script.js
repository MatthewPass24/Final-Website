const teamMembers = [
    {
        img: 'images/train1.jpg',
        name: 'Wooden Train',
        age: 'Toddler',
        skills: ['skill 1', 'skill 2', 'skill 3'],
        price: '$5.99',
        rating: '5/5 stars',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Dui id ornare arcu odio ut sem nulla pharetra diam. Diam sit amet nisl suscipit adipiscing bibendum est. Pretium fusce id velit ut tortor pretium viverra.',
    },

    {
        img: 'images/plane1.jpg',
        name: 'Wooden Plane',
        age: 'Child',
        skills: ['skill 1', 'skill 2', 'skill 3'],
        price: '$5.99',
        rating: '5/5 stars',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Dui id ornare arcu odio ut sem nulla pharetra diam. Diam sit amet nisl suscipit adipiscing bibendum est. Pretium fusce id velit ut tortor pretium viverra.',
    },

    {
        img: 'images/car1.jpg',
        name: 'Wooden Car',
        age: 'Toddler',
        skills: ['skill 1', 'skill 2', 'skill 3'],
        price: '$5.99',
        rating: '5/5 stars',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Dui id ornare arcu odio ut sem nulla pharetra diam. Diam sit amet nisl suscipit adipiscing bibendum est. Pretium fusce id velit ut tortor pretium viverra.',
    },
    {
        img: 'images/plane2.jpg',
        name: 'Wooden Plane (2) ',
        age: 'Child',
        skills: ['skill 1', 'skill 2', 'skill 3'],
        price: '$5.99',
        rating: '5/5 stars',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Dui id ornare arcu odio ut sem nulla pharetra diam. Diam sit amet nisl suscipit adipiscing bibendum est. Pretium fusce id velit ut tortor pretium viverra.',
    },
    {
        img: 'images/train3.jpg',
        name: 'Wooden Train',
        age: 'Toddler',
        skills: ['skill 1', 'skill 2', 'skill 3'],
        price: '$5.99',
        rating: '5/5 stars',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Dui id ornare arcu odio ut sem nulla pharetra diam. Diam sit amet nisl suscipit adipiscing bibendum est. Pretium fusce id velit ut tortor pretium viverra.',
    },
    {
        img: 'images/block2.jpg',
        name: 'Wooden Blocks',
        age: 'Child',
        skills: ['skill 1', 'skill 2', 'skill 3'],
        price: '$5.99',
        rating: '5/5 stars',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Dui id ornare arcu odio ut sem nulla pharetra diam. Diam sit amet nisl suscipit adipiscing bibendum est. Pretium fusce id velit ut tortor pretium viverra.',
    },



]
function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards');
    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');

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
            <div class="card h-100">
                <div class="card-header text-center" style="border-color: ${borderColor};">${member.name}</div>
                <div class="card-body">
                    <img class="img-fluid" src="${member.img}">
                    <p><strong>Age Range:</strong> ${member.age}</p>
                    <p><strong>Skills:</strong> ${member.skills.join(', ')}</p>
                    <p><strong>Price:</strong> ${member.price}</p>
                    <p><strong>Rating:</strong> ${member.rating}</p>
                    <p><strong>Description:</strong> ${member.description}</p>
                </div>
            </div>
        `;

        teamCardsContainer.appendChild(card);
    });
}

window.onload = generateTeamCards();