import axios from 'axios';

const getRecipesByIngredients = async (query: string) => {
	await axios
		.get(`http://localhost:8090/recipe?first=${query}&second=`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.error('Error fetching data: ' + error);
		});
};

export default getRecipesByIngredients;
