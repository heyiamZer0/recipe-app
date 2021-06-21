import { Container, Copyright, IconFacebook, IconInstagram, Logo, SocialContainer } from './styled';

const Footer = () => {
	return (
		<>
			<Container>
				<Logo>Commis</Logo>
				<Copyright>© 2021 Commis</Copyright>
				<SocialContainer>
					<IconFacebook></IconFacebook>
					<IconInstagram></IconInstagram>
				</SocialContainer>
			</Container>
		</>
	);
};

export default Footer;
