interface IOption {
	name: string;
	value: string | number;
}

interface IOptions extends Array<IOption> {}

export const timeOptions: IOptions = [
	{
		name: '< 15 min',
		value: 10,
	},
	{
		name: '< 40 min',
		value: 20,
	},
	{
		name: '< 60 min',
		value: 30,
	},
	{
		name: '< 120 min',
		value: 120,
	},
];

export const difficultyOptions: IOptions = [
	{
		name: 'molto facile',
		value: 'molto facile',
	},
	{
		name: 'facile',
		value: 'facile',
	},
	{
		name: 'media',
		value: 'media',
	},
	{
		name: 'difficile',
		value: 'difficile',
	},
	{
		name: 'molto difficile',
		value: 'molto difficile',
	},
];

export const categoryOptions: IOptions = [
	{
		name: 'antipasti',
		value: 'antipasti',
	},
	{
		name: 'primi piatti',
		value: 'primi piatti',
	},
	{
		name: 'secondi piatti',
		value: 'secondi piatti',
	},
	{
		name: 'piatti unici',
		value: 'piatti unici',
	},
	{
		name: 'insalate',
		value: 'insalate',
	},
	{
		name: 'lievitati',
		value: 'lievitati',
	},
	{
		name: 'torte salate',
		value: 'torte salate',
	},
	{
		name: 'contorni',
		value: 'contorni',
	},
	{
		name: 'salse e sughi',
		value: 'salse e sughi',
	},
	{
		name: 'dolci',
		value: 'dolci',
	},
];
