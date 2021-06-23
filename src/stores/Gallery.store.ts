import { makeAutoObservable } from 'mobx';

class GalleryStore {
	query: string = '';
	data: any[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	setQuery = (query: string) => {
		this.query = query;
	};

	setData = (data: any[]) => {
		this.data = data;
	};
}

export default new GalleryStore();
