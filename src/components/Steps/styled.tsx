import tw from 'tailwind-styled-components';

export const FlexWrapper = tw.div`
    flex
    flex-col
    justify-center
    items-center
    h-full
    pb-10
`;

export const InnerWrapper = tw.div`
    px-4
    py-16
    mx-auto
    sm:max-w-xl
    md:max-w-full
    lg:max-w-screen-xl
    md:px-24
    lg:px-8
    lg:py-20
`;

export const TitleWrapper = tw.div`
    max-w-xl
    mb-10
    md:mx-auto
    sm:text-center
    lg:max-w-2xl
    md:mb-12
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

export const StepsWrapper = tw.div`
    mt-20
    grid
    gap-8
    row-gap-5
    sm:grid-cols-2
    md:row-gap-8
    lg:grid-cols-4
`;

export const Button = tw.button`
    my-2
    mx-2
    h-12
    px-6
    w-full
    inline-flex
    items-center
    justify-center
    text-white
    rounded
    shadow-sm
    bg-red-500
    hover:bg-red-400
    md:w-auto
`;
