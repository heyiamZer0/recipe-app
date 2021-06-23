import { Switch, Route } from 'react-router-dom';
import { StepsPage } from '../pages';
import { Header, Footer, Gallery, RecipeModel } from '../components';
import { FlexWrapper, FlexGrower } from './styled';
import HomePage from '../pages/HomePage';

export default function Routes() {
	return (
		<FlexWrapper>
			<Header></Header>
			<FlexGrower>
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/steps' exact component={StepsPage} />
					<Route path='/search' exact component={Gallery} />
					<Route path='/recipe/:id?' component={RecipeModel} />
				</Switch>
			</FlexGrower>
			<Footer></Footer>
		</FlexWrapper>
	);
}
