import axios from 'axios';
import { makeAutoObservable } from 'mobx';

class RecipeStore {
	query: string = '';
	data: any = [];

	constructor() {
		makeAutoObservable(this);
	}

	setQuery = (query: string) => {
		this.query = query;
	};

	async setData(query: string) {
		await axios
			.get(`http://localhost:8090/recipe?first=${query}&second=`)
			.then((response) => {
				this.data = response.data;
			})
			.catch((error) => {
				console.error('Error fetching data: ' + error);
			});
	}
}

export default new RecipeStore();
