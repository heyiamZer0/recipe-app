export interface IOption {
	name: string;
	value: string | number;
}

export interface IOptions extends Array<IOption> {}

export interface IIngredient {
	ingredient: string;
	quantity: string;
}
export interface IIngredients extends Array<IIngredient> {}

export interface IDescription {
	step: number;
	instructions: string;
}

export interface IDescriptions extends Array<IDescription> {}

export interface IRecipe {
	_id: string;
	title: string;
	image: string;
	ingredients: IIngredients;
	description: IDescriptions;
	calories?: number;
	category: string;
	difficulty: string;
	time: number;
}

export interface IRecipes extends Array<IRecipe> {}
