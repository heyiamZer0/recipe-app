import { Container, Copyright, IconFacebook, IconInstagram, Logo, SocialContainer } from './styled';

const Footer = () => {
	return (
		<footer>
			<Container>
				<Logo>Commis</Logo>
				<Copyright>© 2021 Commis</Copyright>
				<SocialContainer>
					<IconFacebook></IconFacebook>
					<IconInstagram></IconInstagram>
				</SocialContainer>
			</Container>
		</footer>
	);
};

export default Footer;
