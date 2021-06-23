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

import { Filter } from '../';

import { observer } from 'mobx-react';

import { getRecipesByIngredients } from '../../services/api';

import recipe from '../../stores/Recipe.store';
import { Link } from 'react-router-dom';

const Gallery = observer(() => {
	return (
		<Container>
			<InputWrapper>
				<InputForm
					onSubmit={async (e) => {
						e.preventDefault();
						const data = await getRecipesByIngredients(recipe.query);
						recipe.setData(data);
					}}
				>
					<Input
						type='search'
						placeholder='Search'
						onChange={async (e) => {
							recipe.query = e.target.value;
						}}
					></Input>
				</InputForm>
			</InputWrapper>
			<Filter section='Quanto tempo hai per cucinare?' onChange={recipe.setTime} />
			{console.log(recipe.time)}
			<GridContainer>
				{recipe.data &&
					recipe.data
						.filter((item: any) => {
							return item.time <= recipe.time;
						})
						.map((item: any, key: number) => {
							return key !== recipe.data.length - 1 ? (
								<RelativeOverlay>
									<Link to={`/recipe/${item._id}`}>
										<AbsoluteOverlay $small={false} key={key}>
											{item.title}
										</AbsoluteOverlay>
										<Image src={item.image} alt='' width='450' />
									</Link>
								</RelativeOverlay>
							) : null;
						})}
			</GridContainer>
		</Container>
	);
});

export default Gallery;
