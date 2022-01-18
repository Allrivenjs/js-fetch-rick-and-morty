import { getCharacters } from "./services.js";

// Characters page
let currentPage = 1;
let nextPage;
let previousPage;

// DOM elements
const domCharacters = document.getElementById('characters');
const domPaginator = document.getElementById('paginator');

const addPaginator = () => {
    const previousPageBtn = document.createElement('button');
    previousPageBtn.classList = 'flex items-center px-3 py-2 text-sm font-semibold text-gray-500 border rounded-md shadow-md bg-gray-50 border-slate-300 hover:bg-green-100';
    previousPageBtn.id = 'previous-page-btn';

    previousPageBtn.textContent = 'Previous page';
    
    if(previousPage) {
        previousPageBtn.addEventListener('click', () => {
            currentPage--;
            showCharactersInDOM(previousPage) 
        });
    }  

    const currentPageP = document.createElement('p');
    currentPageP.classList = 'flex items-center justify-center p-3 w-10 h-10 text-sm font-semibold text-gray-500 border rounded-md shadow-md bg-gray-50 border-slate-300';
    currentPageP.id = 'current-page';

    currentPageP.textContent = currentPage;

    const nextPageBtn = document.createElement('button');
    nextPageBtn.classList = 'flex items-center px-3 py-2 text-sm font-semibold text-gray-500 border rounded-md shadow-md bg-gray-50 border-slate-300 hover:bg-green-100';
    nextPageBtn.id = 'next-page-btn';

    nextPageBtn.textContent = 'Next page';
    
    if(nextPage) {
        nextPageBtn.addEventListener('click', () => {
            currentPage++;
            showCharactersInDOM(nextPage)
        });
    };

    domPaginator.appendChild(previousPageBtn);
    domPaginator.appendChild(currentPageP);
    domPaginator.appendChild(nextPageBtn);
};

const removePaginator = () => {
    if(document.getElementById('next-page-btn')) document.getElementById('next-page-btn').remove();
    if(document.getElementById('previous-page-btn')) document.getElementById('previous-page-btn').remove();
    if(document.getElementById('current-page')) document.getElementById('current-page').remove();
};

const showCharactersInDOM = async (page = `https://rickandmortyapi.com/api/character/?page=1`) => {
    removePaginator();
    
    domCharacters.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
                <div class="flex-shrink-0 w-10 h-10">
                    <div class="w-10 h-10 rounded-full bg-slate-300"></div>
                </div>
                <div class="ml-4">
                    
                </div>
            </div>
        </td>

        <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900"></div>
        </td>

        <td class="px-6 py-4 whitespace-nowrap">
            <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                
            </span>
        </td>

        <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900"></div>
        </td>

        <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900"></div>
        </td>
    `;

    let { characters, info } = await getCharacters(page);

    domCharacters.innerHTML = '';

    nextPage = info.next;
    previousPage = info.prev;

    characters.map((element, i) => {
        let character = document.createElement('tr');

        character.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                        <img class="w-10 h-10 rounded-full" src=${element.image} alt=${element.name}>
                    </div>
                    <div class="ml-4">
                        ${element.name}
                    </div>
                </div>
            </td>

            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${element.species}</div>
            </td>

            <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    ${element.status}
                </span>
            </td>

            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${element.gender}</div>
            </td>

            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${element.location.name}</div>
            </td>
        `;
        
        domCharacters.appendChild(character);
    });

    addPaginator();
};

// Main
(() => { showCharactersInDOM() })();