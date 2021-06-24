import { useLocalObservable } from 'mobx-react-lite';

export const LocalStore = () => {
	return useLocalObservable(() => ({
		isOpen: false,
		toggle() {
			this.isOpen = !this.isOpen;
		},
	}));
};
