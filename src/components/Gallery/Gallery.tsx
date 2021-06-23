import { observer } from 'mobx-react';
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
import { timeOptions } from '../../utils/constants';

const Gallery = observer(() => {
	return (
		<Container>
			<InputWrapper>
				<InputForm
					onSubmit={async (e) => {
						e.preventDefault();
						recipe.fetchData(recipe.query);
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
			<Filter section='Quanto tempo hai per cucinare?' onChange={recipe.setTime} options={timeOptions} />
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
