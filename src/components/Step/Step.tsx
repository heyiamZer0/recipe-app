import { StepContainer, StepDescription, StepInnerContainer, StepNumber } from './styled';

interface IStep {
	id: number;
	text: string;
}

const Step = ({ id, text }: IStep) => {
	return (
		<StepContainer>
			<StepInnerContainer>
				<StepNumber>
					0{id}
					<StepDescription>{text}</StepDescription>
				</StepNumber>
			</StepInnerContainer>
		</StepContainer>
	);
};

export default Step;
