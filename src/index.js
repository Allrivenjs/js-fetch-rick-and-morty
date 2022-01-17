import { getRandomCharactersWithAnArray } from "./services.js";


// página principal

// characters

const dom_characters = document.getElementById('characters');
const randomCharacters = [];

const API_TOTAL_CHARACTERS = 826;

let characters = [];

// generating random numbers for the random characters array
for (let index = 0; index < 6; index++) {
    randomCharacters[index] = Math.floor(Math.random() * API_TOTAL_CHARACTERS + 1);
}

const showCharactersInDOM = async () => {
    characters = await getRandomCharactersWithAnArray(randomCharacters);

    dom_characters.innerHTML = '';

    characters.map((element, i) => {
        const character = document.createElement('section');
        character.classList = 'flex bg-white p-2 rounded-lg shadow-md h-52';
        character.style.width = '450px'

        character.innerHTML = `
            <img 
                src=${element.image}
                class="object-cover"
                alt=${element.name}
            />
            <div class="flex flex-col justify-around ml-4">
                <h2 class="text-2xl">${element.name}</h2>
                <div class="flex items-center">
                    <span class="w-4 h-4 bg-green-500 inline-block rounded-full mr-2"></span>
                    <p class="">${element.species} - ${element.status}</p>
                </div>

                <p class="text-slate-600">Last known location:</p>
                <p class="text-lg">${element.location.name}</p>
            </div>
        `;

        dom_characters.appendChild(character);
    });
};

// Main function
(() => { showCharactersInDOM() })();