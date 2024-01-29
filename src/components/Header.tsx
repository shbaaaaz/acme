import logo from '../../public/logo.png';
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Cta } from './Cta';

type NavItem = {
  id: number;
  image?: string;
  altText?: string;
  text?: string;
};

export const Header = () => {
  const header = {
    navItems: [
      {
        id: 0,
        image: logo,
        altText: 'logo',
      },
      {
        id: 1,
        text: 'Home',
      },
      {
        id: 2,
        text: 'Feature',
      },
      {
        id: 3,
        text: 'Pricing',
      },
      {
        id: 4,
        text: 'About',
      },
    ] as NavItem[],
  };

  return (
    <header className='h-20 flex flex-col justify-center md:px-8 bg-white text-dark'>
      <div className='px-8 flex justify-between items-center'>
        <ul className='flex items-center gap-8'>
          {header.navItems.map((headerItem) => (
            <Fragment key={headerItem.id}>
              {headerItem.id === 0 ? (
                <li><Image src={headerItem.image!} alt={headerItem.altText!} /></li>
              ) : (
                <li className='hidden md:block'>
                  <Link href='#'>{headerItem.text}</Link>
                </li>
              )}
            </Fragment>
          ))}
        </ul>
        <div className='flex items-center gap-3'>
          <Link href='#' className='hidden md:block'>
            Log in
          </Link>
          <Cta text="Get Strated"/>
        </div>
      </div>
    </header>
  );
};

