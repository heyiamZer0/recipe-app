import { Switch, Route } from 'react-router-dom';
import { Home, WhatWeDo } from '../pages';
import { Header, Footer, Gallery } from '../components';
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
					<Route path='/' exact component={Home} />
					<Route path='/whatwedo' exact component={WhatWeDo} />
					<Route path='/search' exact component={Gallery} />
				</Switch>
			</FlexGrower>
			<Footer></Footer>
		</FlexWrapper>
	);
}
