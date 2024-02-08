import Link from 'next/link';

type FooterItem = {
  id: number;
  text: string;
};

export const Footer = () => {
  const footer = {
    footerText: `© ${new Date().getFullYear()} Acme Co. All rights reserved.`,
    footerItems: [
      { id: 1, text: 'Terms' },
      { id: 2, text: 'Privacy' },
      { id: 3, text: 'Cookies' },
    ] as FooterItem[],
  };

  return (
    <div className='px-8'>
      <footer className='md:px-8'>
        <hr />
        <div className='py-8 flex flex-col-reverse justify-center items-center md:flex-row gap-8 '>
          <p className='text-base grow text-center md:text-start text-hero'>
            {footer.footerText}
          </p>
          <ul className='text-base flex gap-4 items-start md:items-center'>
            {footer.footerItems.map((footerItem) => (
              <li key={footerItem.id} className="text-hero">
                <Link href='#'>{footerItem.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};