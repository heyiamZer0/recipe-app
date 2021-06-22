import tw from 'tailwind-styled-components';

export const StepContainer = tw.div`
    duration-300
    transform
    bg-white
    border-l-4
    border-red-400
    hover:-translate-y-2
`;

export const StepInnerContainer = tw.div`
    h-full
    p-5
    border
    border-l-0
    rounded-r
    shadow-sm
`;

export const StepNumber = tw.h6`
    mb-2
    font-semibold
    leading-5
`;

export const StepDescription = tw.p`
    mt-2
    font-light
    text-sm
    text-gray-900
`;
