import tw from 'tailwind-styled-components';

export const Container = tw.div`
     container
     px-5
     py-8
     mx-auto
     flex
     items-center
     sm:flex-row
     flex-col
 `;

export const Logo = tw.a`
     flex
     title-font
     items-center
     md:justify-start
     justify-center
     ml-3
     text-sm
     font-extrabold
     text-red-500
 `;

export const Copyright = tw.p`
     text-sm
     text-gray-500
     sm:ml-4
     sm:pl-4
     sm:border-l-2
     sm:border-gray-200
     sm:py-2
     sm:mt-0
     mt-4
 `;

export const SocialContainer = tw.span` 
     inline-flex
     sm:ml-auto
     sm:mt-0
     mt-4
     justify-center
     sm:justify-start
 `;

export const IconFacebook = () => {
	return (
		<a href='/facebook' className='text-red-500'>
			<svg
				fill='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				className='w-5 h-5'
				viewBox='0 0 24 24'
			>
				<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
			</svg>
		</a>
	);
};

export const IconInstagram = () => {
	return (
		<a href='/instagram' className='ml-3 text-red-500'>
			<svg
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				className='w-5 h-5'
				viewBox='0 0 24 24'
			>
				<rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
				<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
			</svg>
		</a>
	);
};
