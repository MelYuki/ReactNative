import axios from 'axios';

const URL_POKEAPI = 'https://pokeapi.co/api/v2/';

export const fetchPokemon = async (offset = 0, limit = 50) => {

  // ↓ Ca sert à que dal... C'est juste pour nous faire attendre ♥
  await (new Promise((resolve) => setTimeout(resolve, 5000)));

  const response = await axios.get('pokemon', {
    baseURL: URL_POKEAPI,
    params: {
      offset,
      limit
    }
  });

  const results = response.data.results.map(
    elem => {
      const pokemonId = elem.url.split('/').at(-2);
      const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`

      return {
        id: pokemonId,
        name: elem.name,
        imgUrl: spriteUrl
      };
    }
  );

  return results;
};
