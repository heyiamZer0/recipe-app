import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import recipe from '../../stores/Recipe.store';
import { IDescription, IIngredient, IRecipe } from '../../utils/types';
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
	RelatedFlexWrapper,
} from './styled';

const recipeDetails = (props: any) => {
	return recipe.data
		.filter((item) => {
			return item._id === props.match.params.id;
		})
		.map((recipe: IRecipe, key: number) => {
			return (
				<div key={key}>
					<HeaderContainer>
						<Category>{recipe.category}</Category>
						<Title>{recipe.title}</Title>
						<Description>Una descrizione fantastica</Description>
						<HeaderImage src={recipe.image} width='450' />
					</HeaderContainer>
					<Accordion
						section={'Ingredienti'}
						content={recipe.ingredients.map((item: IIngredient, key: number) => {
							return (
								<li key={key} className='list-none ml-5 '>
									{item.ingredient} - {item.quantity}
								</li>
							);
						})}
					/>
					<Accordion
						section={'Descrizione'}
						content={recipe.description.map((item: IDescription, key: number) => {
							return (
								<li key={key} className='list-none ml-5'>
									{item.step} - {item.instructions}
								</li>
							);
						})}
					/>
				</div>
			);
		});
};

const RecipeModel = observer((props: any) => {
	return (
		<Container>
			<ResponsiveContainer>
				{recipeDetails(props)}
				<RelatedFlexWrapper>
					{recipe.timeFilter
						.filter((item) => {
							return item._id !== props.match.params.id;
						})
						.map((item, key) => {
							return key !== recipe.data.length - 1 && key < 4 ? (
								<div key={key} className='m-auto'>
									<RelativeOverlay>
										<Link to={`/recipe/${item._id}`}>
											<AbsoluteOverlay $small={true}>{item.title}</AbsoluteOverlay>
											<Image src={item.image} width='250' />
										</Link>
									</RelativeOverlay>
								</div>
							) : null;
						})}
				</RelatedFlexWrapper>
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
