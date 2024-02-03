/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Steven Thomas",
    photo: "images/Trigger.jpg",
    favoriteFoods: [
        'Rice',
        'Tikki Masala',
        'Prioshki',
        'Shrimp',
        'Banana Cream Pie'
    ],
    hobbies: [
        'Hobby 1',
        'Something',
        'Coding',
        'Vidja Games'
    ],
    placesLived: []
}



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Ketchikan, AK', 
        length: '15 years'
    }, 
    {
        place: 'Payette, ID', 
        length: '9 years'
    });

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);


/* Favorite Foods List*/
const favoriteFoodsList = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach(food => {
    const li = document.createElement('li');
    li.textContent = food;
    favoriteFoodsList.append(li);
});

/* Hobbies List */
const hobbiesList = document.querySelector('#hobbies');
myProfile.hobbies.forEach(hobby => {
    li = document.createElement('li');
    li.textContent = hobby;
    hobbiesList.append(li);
});

/* Places Lived DataList */
const placesLivedDL = document.querySelector('#places-lived');
myProfile.placesLived.forEach(location => {
    dt = document.createElement('dt');
    dt.textContent = location.place;
    
    dd = document.createElement('dd');
    dd.textContent = location.length;

    placesLivedDL.append(dt, dd);
});

