import tw from 'tailwind-styled-components';

export const Container = tw.div`
    container
    flex
    flex-col
    justify-center
    items-center
    m-auto
    mt-20
`;

export const InputWrapper = tw.div`
    flex
    flex-row
`;

export const InputForm = tw.form`
    pt-2
    mb-5
    mx-auto
    text-gray-600

`;

export const Input = tw.input`
    border-2
    border-gray-300
    bg-white
    text-gray-900
    h-12
    px-5
    rounded-lg
    text-sm
`;

export const RelativeOverlay = tw.div`
    relative
`;

export const GridContainer = tw.div`
    grid
    lg:grid-cols-5
    md:grid-cols-4
    sm:grid-cols-3
    p-5
    border-t-2
`;

export const AbsoluteOverlay = tw.div`
    absolute
    bg-white
    inset-0
    z-10
    flex
    justify-center
    text-xl
    items-center
    text-center
    opacity-0
    duration-100
    ease-in-out
    p-2
    hover:opacity-90
`;

export const Image = tw.img`
    z-0
`;
