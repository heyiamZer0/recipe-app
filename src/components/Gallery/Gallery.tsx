import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { timeOptions } from '../../utils/constants';
import { IRecipe } from '../../utils/types';
import recipe from '../../stores/Recipe.store';
import { Link } from 'react-router-dom';
import { Filter } from '../';
import {
	Container,
	GridContainer,
	Image,
	Input,
	InputForm,
	InputWrapper,
	RelativeOverlay,
	AbsoluteOverlay,
} from './styled';

const Gallery = observer(() => {
	useEffect(() => {
		if (recipe.query === '') recipe.fetchData('burro');
	}, []);

	return (
		<Container>
			<InputWrapper>
				<InputForm
					onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
						event.preventDefault();
						recipe.fetchData(recipe.query);
					}}
				>
					<Input
						type='search'
						placeholder='Search'
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							recipe.query = event.target.value;
						}}
					></Input>
				</InputForm>
			</InputWrapper>
			<Filter section='Quanto tempo hai per cucinare?' onChange={recipe.setTime} options={timeOptions} />
			<GridContainer>
				{recipe.data &&
					recipe.timeFilter.map((item: IRecipe, key: number) => {
						return key !== recipe.data.length - 1 ? (
							<RelativeOverlay key={key}>
								<Link to={`/recipe/${item._id}`}>
									<AbsoluteOverlay $small={false}>{item.title}</AbsoluteOverlay>
									<Image src={item.image} width='450' />
								</Link>
							</RelativeOverlay>
						) : null;
					})}
			</GridContainer>
		</Container>
	);
});

export default Gallery;
