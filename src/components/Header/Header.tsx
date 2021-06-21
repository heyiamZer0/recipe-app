import { AuthBtnWrapper, Container, LoginButton, Logo, Nav, NavLink, SignButton } from './styled';

const Header = () => {
	return (
		<>
			<Container>
				<Logo href='/'>Commis</Logo>
				<Nav>
					<NavLink href='/search'>Ricette</NavLink>
					<NavLink href='/season'>Stagioni</NavLink>
					<NavLink href='/about'>Chi siamo</NavLink>
				</Nav>
				<AuthBtnWrapper>
					<LoginButton>Iscriviti</LoginButton>
					<SignButton>Accedi</SignButton>
				</AuthBtnWrapper>
			</Container>
		</>
	);
};

export default Header;
