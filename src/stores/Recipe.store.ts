import { action, makeAutoObservable } from 'mobx';

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
	setData = (data: any[]) => {
		this.data = data;
	};

	@action
	setTime = (value: any) => {
		this.time = value;
	};
}

export default new RecipeStore();
