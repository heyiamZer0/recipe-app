import { Label, Select } from './styled';

import { observer } from 'mobx-react';

import recipe from '../../stores/Recipe.store';

const Filter = observer(({ section, onChange, options }: any) => {
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
