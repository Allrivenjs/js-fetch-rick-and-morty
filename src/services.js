export const getRandomCharactersWithAnArray = async (array) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${array.toString()}`);
    const data = await res.json();
    return data;
};

export const getCharacters = async (url = `https://rickandmortyapi.com/api/character/?page=1`) => {
    const res = await fetch(url);
    const data = await res.json();
    return { characters: data.results, info: data.info };
};