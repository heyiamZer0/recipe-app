import { Button, FlexWrapper, InnerWrapper, StepsWrapper, Title, TitleWrapper } from './styled';
import Step from '../Step/Step';

const Steps = () => {
	return (
		<FlexWrapper>
			<InnerWrapper>
				<TitleWrapper>
					<Title>
						<span className='text-red-500'>Commis</span> vero, eos accusamus
					</Title>
				</TitleWrapper>
				<StepsWrapper>
					<Step
						{...{
							id: 1,
							text: 'Vidit accusamus comprehensam sed ea, est ex duis commune periculis, paulo doctus persecuti vim no.',
						}}
					/>
					<Step
						{...{
							id: 2,
							text: 'Vidit accusamus comprehensam sed ea, est ex duis commune periculis, paulo doctus persecuti vim no.',
						}}
					/>
					<Step
						{...{
							id: 3,
							text: 'Vidit accusamus comprehensam sed ea, est ex duis commune periculis, paulo doctus persecuti vim no.',
						}}
					/>
					<Step
						{...{
							id: 4,
							text: 'Vidit accusamus comprehensam sed ea, est ex duis commune periculis, paulo doctus persecuti vim no.',
						}}
					/>
				</StepsWrapper>
				<div className='text-center mt-20'>
					<a href='/'>
						<Button>Indietro</Button>
					</a>
					<a href='/search'>
						<Button>Esplora</Button>
					</a>
				</div>
			</InnerWrapper>
		</FlexWrapper>
	);
};

export default Steps;
