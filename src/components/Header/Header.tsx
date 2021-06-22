import { Container, LoginButton, Logo, Nav, NavLink, SignButton } from './styled';

const Header = () => {
	return (
		<header>
			<Container>
				<Logo href='/'>
					<span className='ml-3 mr-5 text-3xl my-2'>Commis</span>
				</Logo>
				<Nav>
					<NavLink href='/search'>Ricette</NavLink>
					<NavLink href='/seasons'>Stagioni</NavLink>
					<NavLink href='/about'>Chi siamo</NavLink>
				</Nav>
				<div className='my-4'>
					<LoginButton>Iscriviti</LoginButton>
					<SignButton>Accedi</SignButton>
				</div>
			</Container>
		</header>
	);
};

export default Header;
