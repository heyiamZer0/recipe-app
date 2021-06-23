import { action, makeAutoObservable } from 'mobx';
import { getRecipesByIngredients } from '../services/api';

class RecipeStore {
	query: string = '';
	data: any[] = [];
	time: number = 120;

	constructor() {
		makeAutoObservable(this);
	}

	@action
	setQuery = (query: string) => {
		this.query = query;
	};

	@action
	fetchData = async (query: string) => {
		this.data = await getRecipesByIngredients(query);
	};

	@action
	setTime = (value: any) => {
		this.time = value;
	};
}

export default new RecipeStore();
