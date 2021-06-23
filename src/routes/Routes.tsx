import { Switch, Route } from 'react-router-dom';
import { Home, WhatWeDo } from '../pages';
import { Header, Footer, Gallery, Model } from '../components';
import { FlexWrapper, FlexGrower } from './styled';

export default function Routes() {
	return (
		<FlexWrapper>
			<Header></Header>
			<FlexGrower>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/whatwedo' exact component={WhatWeDo} />
					<Route path='/search' exact component={Gallery} />
					<Route path='/recipe/:id?' component={Model} />
				</Switch>
			</FlexGrower>
			<Footer></Footer>
		</FlexWrapper>
	);
}
