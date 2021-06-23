import { makeAutoObservable } from 'mobx';

class ModelStore {
	recipe: any = [];
	id: string = '';

	setID = (id: string) => {
		this.id = id;
	};

	constructor() {
		makeAutoObservable(this);
	}
}

export default new ModelStore();
