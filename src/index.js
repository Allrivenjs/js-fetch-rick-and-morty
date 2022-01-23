import { getRandomCharactersWithAnArray, getRandomLocationsWithAnArray } from "./services.js";


// página principal

// characters

const domCharacters = document.getElementById('characters');


const API_TOTAL_CHARACTERS = 826;
const API_TOTAL_LOCATIONS = 126;
const N_RANDOM_ELEMENTS = 21;

let elements = [];

// generating random numbers for the random characters array
const generateRandomNum = (max) => {
    const randomNumber = [];
    for (let index = 0; index < N_RANDOM_ELEMENTS; index++) {
        randomNumber[index] = Math.floor(Math.random() * max + 1);
    };
    return randomNumber;
};

const showRandomElementsInDOM = async (elementType = 'characters') => {
    if(elementType === 'characters') {
        elements = await getRandomCharactersWithAnArray(generateRandomNum(API_TOTAL_CHARACTERS));
    } else if(elementType === 'locations') {
        elements = await getRandomLocationsWithAnArray(generateRandomNum(API_TOTAL_LOCATIONS));
    };

    domCharacters.innerHTML = '';

    elements.map((element, i) => {
        const character = document.createElement('section');
        character.classList = 'flex bg-whiterounded-lg shadow-md h-52 w-52 relative';

        if(elementType === 'characters') {
            character.innerHTML = `
                <img 
                    src=${element.image}
                    class="object-cover z-10"
                    alt=${element.name}
                />
                <div class="absolute p-4 flex w-full h-full justify-center items-center bg-green-200 bg-opacity-50 z-50 opacity-0 hover:opacity-100">
                    <h2 class="text-xl text-green-900 font-extrabold">${element.name}</h2>
                </div>
            `;
        } else if(elementType === 'locations')  {
            character.innerHTML = `
                <div class="absolute p-4 flex w-full h-full justify-center items-center bg-green-200 bg-opacity-50 z-50">
                    <h2 class="text-xl text-green-900 font-extrabold">${element.name}</h2>
                </div>
            `;
        };

        domCharacters.appendChild(character);
    });
};

document.getElementById('show-random-locations').addEventListener('click', (e) => showRandomElementsInDOM('locations'));
document.getElementById('show-random-characters').addEventListener('click', (e) => showRandomElementsInDOM('characters'));

// Main function
(() => { showRandomElementsInDOM() })();