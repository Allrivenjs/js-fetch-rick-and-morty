import { getLocations } from "./services.js";

// Characters page

// Pagination
let currentPage = 1;
let nextPage;
let previousPage;

// data
let nPlanets = 0;

// DOM elements
const domLocations = document.getElementById('locations');
const domPaginator = document.getElementById('paginator');
domLocations.style.width = '920px'

const addPaginator = () => {
    const previousPageBtn = document.createElement('button');
    previousPageBtn.classList = 'flex items-center px-3 py-2 text-sm font-semibold text-gray-500 border rounded-md shadow-md bg-gray-50 border-slate-300 hover:bg-green-100';
    previousPageBtn.id = 'previous-page-btn';

    previousPageBtn.textContent = 'Previous page';
    
    if(previousPage) {
        previousPageBtn.addEventListener('click', () => {
            currentPage--;
            showLocationInDOM(previousPage) 
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
            showLocationInDOM(nextPage)
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

export const showLocationInDOM = async (page = `https://rickandmortyapi.com/api/location/?page=1`) => {
    removePaginator();

    domLocations.innerHTML = ``;
    
    let { locations, info } = await getLocations(page);

    if(locations && info) {

        domLocations.innerHTML = '';

        nextPage = info.next;
        previousPage = info.prev;

        nPlanets = 0;

        locations.map((element, i) => {
            let location = document.createElement('tr');

            if(element.type === 'Planet') nPlanets++;

            location.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">${element.name}</div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">${element.type}</div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">${element.dimension}</div>
                </td>
            `;
            
            domLocations.appendChild(location);
        });

        addPaginator();

        document.getElementById('n-planets').textContent = nPlanets;
    } else {
        domLocations.innerHTML = `<div class="p-6 bg-white text-3xl"><p class="opacity-60">🤔 There are no locations with this properties</p></div>`;
        document.getElementById('n-planets').textContent = 0;
    };
};

// Main
(() => { showLocationInDOM() })();