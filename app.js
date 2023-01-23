import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

let dogData = [];
// on load
window.addEventListener('load', async () => {
    const dogs = await getDogs();
    dogData = dogs;
    console.log(dogs);
});
// fetch all dogs
// render and append all dog cards to the container
