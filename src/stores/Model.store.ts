import { action, makeAutoObservable } from 'mobx';
import { getRecipesByID } from '../services/api';

class ModelStore {
	recipe: any = [];
	accordionTitles: any = [];
	id: string = '';
	isOpen: any = '';
	title: string = '';
	content: string = '';

	toggleAccordion() {
		this.isOpen = !this.isOpen;
	}

	setID = (id: string) => {
		this.id = id;
	};

	constructor() {
		makeAutoObservable(this);
	}

	getModel = (data: any) => {
		this.recipe = data;
	};

	@action
	async setModel() {
		this.recipe = await getRecipesByID(this.id);
	}
}

export default new ModelStore();
