import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import recipe from '../../stores/Recipe.store';
import { IDescription, IIngredient } from '../../utils/types';
import Accordion from '../Accordion/Accordion';
import { AbsoluteOverlay, RelativeOverlay, Image } from '../Gallery/styled';
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
						<HeaderImage src={recipe.image} width='450' />
					</HeaderContainer>
					<Accordion
						section={'Ingredienti'}
						content={recipe.ingredients.map((item: IIngredient) => {
							return (
								<li className='list-none ml-5 '>
									{item.ingredient} - {item.quantity}
								</li>
							);
						})}
					/>
					<Accordion
						section={'Descrizione'}
						content={recipe.description.map((item: IDescription) => {
							return (
								<li className='list-none ml-5'>
									{item.step} - {item.instructions}
								</li>
							);
						})}
					/>
				</>
			);
		});
};

const RecipeModel = observer((props: any) => {
	return (
		<Container>
			<ResponsiveContainer>
				{recipeDetails(props)}
				<FlexWrapper>
					{recipe.data
						.filter((item) => {
							return item._id !== props.match.params.id;
						})
						.filter((item) => {
							return item.time <= recipe.time;
						})
						.map((item, key) => {
							return key !== recipe.data.length - 1 && key < 5 ? (
								<RelativeOverlay>
									<Link to={`/recipe/${item._id}`}>
										<AbsoluteOverlay $small={true}>{item.title}</AbsoluteOverlay>
										<Image src={item.image} height='400' width='200' />
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

export default RecipeModel;
