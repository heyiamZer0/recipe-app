import {
	Container,
	FlexWrapper,
	TitleWrapper,
	Title,
	Button,
	ButtonWrapper,
	InnerContainer,
	Image,
	ImageWrapper,
} from './styled';

const CallToAction = () => {
	return (
		<Container>
			<FlexWrapper>
				<InnerContainer>
					<TitleWrapper>
						<Title>
							Sei in cerca di un <span className='text-red-500 font-bold'>commis</span>?
						</Title>
					</TitleWrapper>
					<ButtonWrapper>
						<a href='/steps'>
							<Button>Inizia da qui</Button>
						</a>
					</ButtonWrapper>
				</InnerContainer>
				<ImageWrapper>
					<Image src='./assets/cooking.png'></Image>
				</ImageWrapper>
			</FlexWrapper>
		</Container>
	);
};

export default CallToAction;
