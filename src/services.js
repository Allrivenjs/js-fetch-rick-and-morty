export const getRandomCharactersWithAnArray = async (array) => {
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${array.toString()}`);
        const data = await res.json();
        return data;
    } catch(e) {
        console.log(e);
    };
};

export const getRandomLocationsWithAnArray = async (array) => {
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/location/${array.toString()}`);
        const data = await res.json();
        return data;
    } catch(e) {
        console.log(e);
    };
};

export const getCharacters = async (url = `https://rickandmortyapi.com/api/character/?page=1`) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return { characters: data.results, info: data.info };
    } catch(e) {
        console.log(e);
    };
};

export const getLocations = async (url = `https://rickandmortyapi.com/api/locations/?page=1`) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return { locations: data.results, info: data.info };
    } catch(e) {
        console.log(e);
    };
};