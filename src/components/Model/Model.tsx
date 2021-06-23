import { observer } from 'mobx-react';
import Accordion from '../Accordion/Accordion';
import { Category, Container, Description, HeaderContainer, Image, ResponsiveContainer, Title } from './styled';

import model from '../../stores/Model.store';
import recipe from '../../stores/Gallery.store';

const Model = observer((props: any) => {
	model.setID(props.match.params.id);

	model.recipe = recipe.data.filter((item) => {
		return item._id === model.id;
	});

	return (
		model.recipe && (
			<Container>
				<ResponsiveContainer>
					<HeaderContainer>
						<Category>{model.recipe && model.recipe[0].category}</Category>
						<Title>{model.recipe && model.recipe[0].title}</Title>
						<Description>Una descrizione fantastica</Description>
						<Image src={model.recipe && model.recipe[0].image} />
					</HeaderContainer>

					<Accordion
						section={'Ingredienti'}
						content={model.recipe[0].ingredients.map((item: any) => {
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
						content={model.recipe[0].description.map((item: any) => {
							return (
								<>
									<li className='list-none '>
										{item.step} - {item.instructions}
									</li>
								</>
							);
						})}
					/>
				</ResponsiveContainer>
			</Container>
		)
	);
});

export default Model;
