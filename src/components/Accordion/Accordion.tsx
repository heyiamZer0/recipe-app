import { BorderContainer, Button, Content, Title, Wrapper } from './styled';
import { observer } from 'mobx-react';

import { LocalStore } from '../../stores/Accordion.store';

const Accordion = observer(({ section, content }: { section: string; content: Array<object> }) => {
	const store = LocalStore();

	return (
		<BorderContainer>
			<Button
				type='button'
				aria-label='Open item'
				title='Open item'
				onClick={() => {
					store.toggle();
				}}
			>
				<Title>{section}</Title>
				<svg
					viewBox='0 0 24 24'
					className={`w-3 text-gray-600 transform transition-transform duration-200 ${
						store.isOpen ? 'rotate-180' : ''
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
			{store.isOpen && (
				<Wrapper>
					<Content>{content}</Content>
				</Wrapper>
			)}
		</BorderContainer>
	);
});

export default Accordion;
