/* eslint-disable no-lone-blocks */
import tw from 'tailwind-styled-components';

export const BorderContainer = tw.div`
    border-b
`;

export const Button = tw.button`
    flex
    items-center
    justify-between
    w-full
    p-4
    focus:outline-none
`;

export const Title = tw.p`
    text-lg
    font-medium

`;

export const Wrapper = tw.div`
    p-4
    pt-0
`;

export const Content = tw.p`
    text-gray-700
`;
