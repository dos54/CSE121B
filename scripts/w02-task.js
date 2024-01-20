/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Steven Cannon Thomas";
let currentYear = 2024;
let profilePicture = 'images/Trigger.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */
let favoriteFoods = ['Pizza', 'Chicken', 'Salmon', 'Oatmeal', 'Barbacoa'];

favoriteFoods.forEach(function(food) {
    foodElement.textContent += `${food}, `;
});

let foodItem = 'Ice cream';
favoriteFoods.push(foodItem)
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;