// Check out https://icanhazdadjoke.com/api
const getJokesByPage = async (page = 1) => {
	const URL = `https://icanhazdadjoke.com/search?limit=30&page=${page}`;
	const [results, previous_page] = await fetch(URL, {
		headers: { Accept: "application/json" },
	})
		.then((response) => response.json())
		.then(({ results, previous_page }) => [results, previous_page]);
	return [results, previous_page];
};
