import tw from 'tailwind-styled-components';

export const Container = tw.div`
 container
 mx-auto
 flex
 flex-wrap
 p-5
 flex-col
 md:flex-row
 items-center
 `;

export const Logo = tw.a`
     flex 
     title-font
     font-extrabold 
     items-center 
     text-red-500
     mb-4
     mr-3
     text-xl
     md:mb-0'
 `;

export const Nav = tw.nav`
     md:ml-auto
     md:mr-auto
     flex flex-wrap
     items-center
     mt-1
     justify-center
 `;

export const NavLink = tw.a`
 mr-5
 text-gray-900
 hover:text-red-500

 `;

export const AuthBtnWrapper = tw.div`

 `;

export const LoginButton = tw.button`
     inline-flex
     items-center
     text-red-500
     h-12
     py-1
     px-3
     focus:outline-none
     hover:bg-red-500
     hover:text-white border-2
     border-red-500
     rounded
     text-base
     mt-4
     md:mt-0
 `;

export const SignButton = tw.button`
     inline-flex
     h-12
     items-center
     px-3
     border-2
     focus:outline-none
     text-white
     hover:bg-white
     hover:text-red-500
     bg-red-500
     border-red-500
     hover:border-red-500
     rounded
     text-base
     md:mt-0
     mx-4
 `;
