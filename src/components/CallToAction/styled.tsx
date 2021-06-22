import tw from 'tailwind-styled-components';

export const Container = tw.div`
    container
    px-6
    mx-auto
`;

export const FlexWrapper = tw.div`
    flex
    items-center
    flex-col-reverse
    lg:flex-row
`;

export const InnerContainer = tw.div`
    w-full
    lg:w-1/2
`;

export const TitleWrapper = tw.div`
    lg:max-w-lg
`;

export const Title = tw.h1`
    text-3xl
    font-semibold
    text-gray-800
    lg:text-5xl
    sm:text-2xl
`;

export const ButtonWrapper = tw.div`
    mt-8
    space-y-3
    lg:space-y-0
    lg:flex-row
`;

export const Button = tw.button`
    w-full
    h-12
    px-4
    py-2
    text-sm
    font-medium
    tracking-wide
    text-white
    capitalize
    transition-colors
    duration-200
    transform
    bg-red-500
    rounded
    lg:w-auto
    hover:bg-red-400
    focus:outline-none
    focus:bg-red-400
`;

export const ImageWrapper = tw.div`
    flex
    items-center
    justify-center
    w-full
    lg:w-1/2
`;

export const Image = tw.img`
    transform
    scale-75
    md:scale-75
    lg:scale-100
`;
