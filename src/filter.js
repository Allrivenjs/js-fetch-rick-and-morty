import { showCharactersInDOM } from "./characters.js";

let url = 'https://rickandmortyapi.com/api/character/?page=1';

const filter = {
    nameFilter: '',
    statusFilter: '',
    speciesFilter: '',
    typeFilter: '',
    genderFilter: '',
};

const domNameInput = document.getElementById('name-input');
const domStatusSelect = document.getElementById('status-select');
const domSpeciesInput = document.getElementById('species-input');
const domTypeInput = document.getElementById('type-input');
const domGenderSelect = document.getElementById('gender-select');

const domSearchButton = document.getElementById('search');

domNameInput.addEventListener('keyup', (e) => {
    filter.nameFilter = e.target.value;
});

domStatusSelect.addEventListener('change', (e) => {
    filter.statusFilter = e.target.value;
});

domSpeciesInput.addEventListener('keyup', (e) => {
    filter.speciesFilter = e.target.value;
});

domTypeInput.addEventListener('keyup', (e) => {
    filter.typeFilter = e.target.value;
});

domGenderSelect.addEventListener('change', (e) => {
    filter.genderFilter = e.target.value;
});

domSearchButton.addEventListener('click', async () => {
    showCharactersInDOM(`${url}&name=${filter.nameFilter}&status=${filter.statusFilter}&species=${filter.speciesFilter}&type=${filter.typeFilter}&gender=${filter.genderFilter}`);
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

document.getElementById('filter-status').addEventListener('change', (e) => {
    filter.statusFilter='';
    domStatusSelect.value = 'alive';
    if(domStatusSelect.style.display === 'block') {
        domStatusSelect.style.display = 'none';
    } else {
        domStatusSelect.style.display = 'block';
    };
});

document.getElementById('filter-species').addEventListener('change', (e) => {
    filter.speciesFilter='';
    domSpeciesInput.value='';
    if(domSpeciesInput.style.display === 'block') {
        domSpeciesInput.style.display = 'none';
    } else {
        domSpeciesInput.style.display = 'block';
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

document.getElementById('filter-gender').addEventListener('change', (e) => {
    filter.genderFilter='';
    domGenderSelect.value = 'female'
    if(domGenderSelect.style.display === 'block') {
        domGenderSelect.style.display = 'none';
    } else {
        domGenderSelect.style.display = 'block';
    };
});