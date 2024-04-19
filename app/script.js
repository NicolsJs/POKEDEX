const fetchPokemon = async (pokemon) => {
	const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
	console.log(apiResponse);
};
fetchPokemon();
