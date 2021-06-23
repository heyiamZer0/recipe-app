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

import { observer } from 'mobx-react';

import { getRecipesByIngredients } from '../../services/api';

import recipe from '../../stores/Gallery.store';
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

			<GridContainer>
				{recipe.data &&
					// eslint-disable-next-line array-callback-return
					recipe.data.map((item: any, key: number) => {
						if (key !== recipe.data.length - 1)
							return (
								<RelativeOverlay>
									<Link to={`/recipe/${item._id}`}>
										<AbsoluteOverlay key={key}>{item.title}</AbsoluteOverlay>
										<Image src={item.image} alt='' width='450' />
									</Link>
								</RelativeOverlay>
							);
					})}
			</GridContainer>
		</Container>
	);
});

export default Gallery;
