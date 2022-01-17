export const getRandomCharactersWithAnArray = async (array) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${array.toString()}`);
    const data = await res.json();

    return data;
};