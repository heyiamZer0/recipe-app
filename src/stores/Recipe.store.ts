import { action, makeAutoObservable } from 'mobx';
import { getRecipesByIngredients } from '../services/api';
import { IDescriptions, IIngredients, IRecipe } from '../utils/types';

class RecipeStore implements IRecipe {
	query: string = '';
	data: IRecipe[] = [];
	time: number = 120;

	constructor() {
		makeAutoObservable(this);
	}

	_id!: string;
	title!: string;
	image!: string;
	ingredients!: IIngredients;
	description!: IDescriptions;
	calories?: number | undefined;
	category!: string;
	difficulty!: string;

	@action
	setQuery = (query: string) => {
		this.query = query;
	};

	@action
	fetchData = async (query: string) => {
		this.data = await getRecipesByIngredients(query);
	};

	@action
	setTime = (value: number) => {
		this.time = value;
	};
}

export default new RecipeStore();
