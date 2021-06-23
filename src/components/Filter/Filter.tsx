import { Label, Select } from './styled';

import { observer } from 'mobx-react';

import recipe from '../../stores/Recipe.store';

const Filter = observer(({ section, onChange }: any) => {
	const options = [
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
	return (
		<Label>
			{section}
			<Select
				value={recipe.time}
				onChange={(e) => {
					e.preventDefault();
					onChange(e.target.value);
				}}
			>
				{options.map((item: any, key: number) => (
					<option key={key} value={item.value}>
						{item.name}
					</option>
				))}
			</Select>
		</Label>
	);
});

export default Filter;
