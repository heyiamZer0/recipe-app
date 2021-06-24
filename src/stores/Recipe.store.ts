import { action, computed, makeAutoObservable } from 'mobx';
import { getRecipesByIngredients } from '../services/api';
import { IDescriptions, IIngredients, IRecipe, IRecipes } from '../utils/types';

class RecipeStore implements IRecipe {
	query: string = '';
	data: IRecipes = [];
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

	@computed get timeFilter() {
		return this.data.filter((item) => {
			return item.time <= this.time;
		});
	}

	@action
	setQuery = (query: string) => {
		this.query = query;
	};

	@action
	fetchData = async (query: string) => {
		try {
			return (this.data = await getRecipesByIngredients(query));
		} catch (error) {
			return error;
		}
	};

	@action
	setTime = (time: number) => {
		this.time = time;
	};
}

export default new RecipeStore();
