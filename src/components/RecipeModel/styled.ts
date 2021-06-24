import tw from 'tailwind-styled-components';

export const Container = tw.div`
    px-4
    py-16
    mx-auto
    sm:max-w-xl
    md:max-w-full
    lg:max-w-screen-xl
    md:px-24
    lg:py-20
`;

export const ResponsiveContainer = tw.div`
    max-w-xl
    sm:mx-auto
    lg:max-w-2xl
`;

export const HeaderContainer = tw.div`
    max-w-xl
    mb-10
    md:mx-auto
    sm:text-center
    lg:max-w-2xl
    md:mb-12
`;

export const Category = tw.p`
    inline-block
    px-3
    py-px
    mb-4
    text-xs
    font-semibold
    tracking-wider
    uppercase
    rounded-full
`;

export const Title = tw.h2`
    max-w-lg
    mb-6
    text-3xl
    font-bold
    leading-none
    tracking-tight
    text-gray-900
    sm:text-4xl
    md:mx-auto
`;

export const Description = tw.p`
    text-base
    text-gray-700
    md:text-lg
`;

export const Image = tw.img`
    my-5
    mx-auto
    rounded-md
`;

export const RelatedFlexWrapper = tw.div`
    flex
    flex-row
    rounded-md
    overflow-hidden
`;

export const ButtonWrapper = tw.div`
    mt-10
    flex
    justify-center
    items-center
`;

export const Button = tw.button`
    infline-flex
    items-center
    rounded
    border
    focus:outline-none
    border-red-500 
    text-red-500
    hover:bg-red-500
    hover:text-white
    h-12
    py-1
    px-3
    mt-4
    md:mt-0
`;
