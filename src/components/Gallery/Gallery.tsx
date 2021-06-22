import { Container, Input, InputForm, InputWrapper } from './styled';
import { observer } from 'mobx-react';

import recipe from '../../stores/Recipe.store';

const Gallery = observer(() => {
	return (
		<Container>
			<InputWrapper>
				<InputForm
					onSubmit={async () => {
						await recipe.setData(recipe.query);
					}}
				>
					<Input
						type='search'
						placeholder='Search'
						onChange={async (e) => {
							recipe.query = e.target.value;
							recipe.setData(recipe.query);
						}}
					></Input>
				</InputForm>
			</InputWrapper>
			<div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 p-5 border-t-2'>
				{recipe.data &&
					// eslint-disable-next-line array-callback-return
					recipe.data.map((item: any, key: any) => {
						if (key !== recipe.data.length - 1)
							return (
								<div className='relative'>
									<div
										id={key}
										className='absolute bg-white inset-0 z-10 flex justify-center text-xl items-center text-center opacity-0 duration-500 ease-in-out p-2 font-medium hover:opacity-90'
									>
										{item.title}
									</div>
									<img className='z-0' src={item.image} width='450' alt=''></img>
								</div>
							);
					})}
			</div>
		</Container>
	);
});

export default Gallery;
