import { showLocationInDOM } from "./location.js";

let url = 'https://rickandmortyapi.com/api/location/?page=1';

const filter = {
    nameFilter: '',
    typeFilter: '',
    dimensionFilter: '',
};

const domNameInput = document.getElementById('name-input');
const domTypeInput = document.getElementById('type-input');
const domDimensionInput = document.getElementById('dimension-input');

const domSearchButton = document.getElementById('search');

domNameInput.addEventListener('keyup', (e) => {
    filter.nameFilter = e.target.value;
});

domTypeInput.addEventListener('keyup', (e) => {
    filter.typeFilter = e.target.value;
});

domDimensionInput.addEventListener('keyup', (e) => {
    filter.dimensionFilter = e.target.value;
});

domSearchButton.addEventListener('click', async () => {
    showLocationInDOM(`${url}&name=${filter.nameFilter}&type=${filter.typeFilter}&dimension=${filter.dimensionFilter}`);
});

document.getElementById('filter-name').addEventListener('change', (e) => {
    filter.nameFilter=''
    domNameInput.value = '';
    if(domNameInput.style.display === 'block') {
        domNameInput.style.display = 'none';
    } else {
        domNameInput.style.display = 'block';
    };
});


document.getElementById('filter-type').addEventListener('change', (e) => {
    filter.typeFilter='';
    domTypeInput.value='';
    if(domTypeInput.style.display === 'block') {
        domTypeInput.style.display = 'none';
    } else {
        domTypeInput.style.display = 'block';
    };
});

document.getElementById('filter-dimension').addEventListener('change', (e) => {
    filter.dimensionFilter='';
    domDimensionInput.value = ''
    if(domDimensionInput.style.display === 'block') {
        domDimensionInput.style.display = 'none';
    } else {
        domDimensionInput.style.display = 'block';
    };
});