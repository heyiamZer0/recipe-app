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
