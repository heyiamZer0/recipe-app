import { observer } from 'mobx-react';
import { BorderContainer, Button, Content, Title, Wrapper } from './styled';

import model from '../../stores/Model.store';

const Accordion = observer(({ section, content }: any) => {
	return (
		<BorderContainer>
			<Button
				type='button'
				aria-label='Open item'
				title='Open item'
				onClick={() => {
					model.toggleAccordion();
				}}
			>
				<Title>{section}</Title>
				<svg
					viewBox='0 0 24 24'
					className={`w-3 text-gray-600 transform transition-transform duration-200 ${
						model.isOpen ? 'rotate-180' : ''
					}`}
				>
					<polyline
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeMiterlimit='10'
						points='2,7 12,17 22,7'
						strokeLinejoin='round'
					/>
				</svg>
			</Button>
			{model.isOpen && (
				<Wrapper>
					<Content>{content}</Content>
				</Wrapper>
			)}
		</BorderContainer>
	);
});

export default Accordion;

// {model.recipe &&
// 	model.recipe[0].ingredients.map((item: any) => {
// 		return (
// 			<>
// 				<li className='list-none '>
// 					{item.ingredient} - {item.quantity}
// 				</li>
// 			</>
// 		);
// 	})}
