// Check out https://icanhazdadjoke.com/api
const getJokesByPage = async (page = 1) => {
	const URL = `https://icanhazdadjoke.com/search?limit=30&page=${page}`;
	const json = await fetch(URL, {
		headers: { Accept: "application/json" },
	}).then((response) => response.json());

	// TODO: REMOVE AFTER TESTING FINISHED
	console.log({ json });
	return { json };

	const { results, previous_page } = json;
	return [results, previous_page];
};
