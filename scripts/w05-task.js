/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(element => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = element.templeName;
        let img = document.createElement('img');
        img.src = element.imageUrl;
        img.alt = element.location;

        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    console.log(templeList);
    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filter = document.querySelector('#filtered').value;
    let filteredTemples = temples;
    switch (filter) {
        case "utah":
            filteredTemples = temples.filter(temple => temple.location.includes("Utah"));
            break;
        case "notutah":
            filteredTemples = temples.filter(temple => {
                let nonUtah = !temple.location.includes("Utah");
                console.log(nonUtah);
                return nonUtah;
            });
            break;
        case "older":
            filteredTemples = temples.filter(temple => {
                let templeDate = Date.parse(temple.dedicated);
                return templeDate < new Date(1950, 0, 1).getTime();
            });
            break;
        case "all":
            filteredTemples = temples;
            break;
    }
    displayTemples(filteredTemples);
}

getTemples();

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => {
    filterTemples(templeList)
});
