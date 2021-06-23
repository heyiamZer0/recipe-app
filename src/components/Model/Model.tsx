import { observer } from 'mobx-react';
import recipe from '../../stores/Gallery.store';
import Accordion from '../Accordion/Accordion';
import {
	Category,
	Container,
	Description,
	HeaderContainer,
	Image as HeaderImage,
	ResponsiveContainer,
	Title,
	Button,
	ButtonWrapper,
	FlexWrapper,
} from './styled';

import { AbsoluteOverlay, RelativeOverlay, Image } from '../Gallery/styled';

import { Link } from 'react-router-dom';

const recipeDetails = (props: any) => {
	return recipe.data
		.filter((item) => {
			return item._id === props.match.params.id;
		})
		.map((recipe) => {
			return (
				<>
					<HeaderContainer>
						<Category>{recipe.category}</Category>
						<Title>{recipe.title}</Title>
						<Description>Una descrizione fantastica</Description>
						<HeaderImage src={recipe.image} />
					</HeaderContainer>
					<Accordion
						section={'Ingredienti'}
						content={recipe.ingredients.map((item: any) => {
							return (
								<>
									<li className='list-none '>
										{item.ingredient} - {item.quantity}
									</li>
								</>
							);
						})}
					/>
					<Accordion
						section={'Descrizione'}
						content={recipe.description.map((item: any) => {
							return (
								<>
									<li className='list-none'>
										{item.step} - {item.instructions}
									</li>
								</>
							);
						})}
					/>
				</>
			);
		});
};

const Model = observer((props: any) => {
	return (
		<Container>
			<ResponsiveContainer>
				{recipeDetails(props)}
				<FlexWrapper>
					{recipe.data
						.filter((item) => {
							return item._id !== props.match.params.id;
						})
						.map((item, key) => {
							return key !== recipe.data.length - 1 && key < 5 ? (
								<RelativeOverlay>
									<Link to={`/recipe/${item._id}`}>
										<AbsoluteOverlay $small={true}>{item.title}</AbsoluteOverlay>
										<Image src={item.image} width='200' />
									</Link>
								</RelativeOverlay>
							) : null;
						})}
				</FlexWrapper>
				<ButtonWrapper>
					<Link to={`/search`}>
						<Button>Indietro</Button>
					</Link>
				</ButtonWrapper>
			</ResponsiveContainer>
		</Container>
	);
});

export default Model;
