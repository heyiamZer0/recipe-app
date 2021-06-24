import axios from 'axios';
import { IRecipes } from '../utils/types';

export const getRecipesByIngredients = async (query: string): Promise<IRecipes> => {
	const words: any = query.replace(/\b[a-z]{0,1}\b/gim, '').match(/\b(\w+)\b/g);

	if (words[1] === undefined || null) {
		words[1] = '';
	} else query = words[0];

	return await axios
		.get(`http://localhost:8090/recipe?first=${query}&second=${words[1]}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.error('Error fetching data: ' + error);
		});
};
