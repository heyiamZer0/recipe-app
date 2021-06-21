import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { Header, Footer } from '../components';
import tw from 'tailwind-styled-components';

const FlexWrapper = tw.div`
 	flex
 	flex-col
 	h-screen
 `;

const FlexGrower = tw.div`
 	flex-grow
 	justify-center
 	items-center	
 `;

export default function Routes() {
	return (
		<FlexWrapper>
			<Header></Header>
			<FlexGrower>
				<Switch>
					<Route path='/' exact component={Home}></Route>
				</Switch>
			</FlexGrower>
			<Footer></Footer>
		</FlexWrapper>
	);
}
