import { spawn } from 'child_process';
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
    <div className="text-white  flex items-center justify-center min-h-[15vh] mb-2">
      <div className="mr-[5rem]">
        <span className="text-secondary font-averia text-2xl">ScreenSpace</span>
        <div className="flex items-center justify-around mt-2 opacity-80">
          <GrFacebookOption className="cursor-pointer" size={20} />
          <GrInstagram className="cursor-pointer" size={20} />
          <GrTwitter className="cursor-pointer" size={20} />
          <GrYoutube className="cursor-pointer" size={20} />
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-x-24 gap-y-3 text-sm text-offWhite text-opacity-50 font-light ">
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
