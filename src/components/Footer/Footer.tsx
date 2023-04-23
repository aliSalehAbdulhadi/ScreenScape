import React from 'react';

import {
  GrYoutube,
  GrTwitter,
  GrInstagram,
  GrFacebookOption,
} from 'react-icons/gr';

const footerCol = [
  {
    link: 'Help Center',
  },
  {
    link: 'Jobs',
  },
  {
    link: 'Media Center',
  },
  {
    link: 'Contact Us',
  },
  {
    link: 'Term of Use',
  },
  {
    link: 'Information',
  },
  {
    link: 'Audio Description',
  },
  {
    link: 'Legal Notices',
  },
  {
    link: 'Service Code',
  },
];

const Footer = () => {
  return (
    <div className="text-white transition-all  flex items-center justify-center flex-col sm:flex-row min-h-[15vh]  w-fit mx-5 sm:mx-10 my-5 sm:my-0">
      <div className="sm:mr-[5rem] sm:mb-0 pb-5">
        <span className="text-secondary font-averia text-xl semiSm:text-2xl">
          ScreenSpace
        </span>
        <div className="flex items-center justify-around mt-2 opacity-80 hidden">
          <GrFacebookOption className="cursor-pointer " size={20} />
          <GrInstagram className="cursor-pointer " size={20} />
          <GrTwitter className="cursor-pointer " size={20} />
          <GrYoutube className="cursor-pointer " size={20} />
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-x-12 gap-y-1  semiSm:gap-x-24 semiSm:gap-y-3 text-xs semiSm:text-sm text-offWhite text-opacity-50 font-light ">
        {footerCol.map((link) => (
          <span className="hover:underline cursor-pointer" key={link.link}>
            {link.link}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Footer;
