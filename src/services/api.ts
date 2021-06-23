import axios from 'axios';

export const getRecipesByIngredients = async (query: string): Promise<any> => {
	return await axios
		.get(`http://localhost:8090/recipe?first=${query}&second=`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.error('Error fetching data: ' + error);
		});
};

export const getRecipesByID = async (id: string): Promise<any> => {
	return await axios
		.get(`http://localhost:8090/id?id=${id}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.error('Error fetching data: ' + error);
		});
};
