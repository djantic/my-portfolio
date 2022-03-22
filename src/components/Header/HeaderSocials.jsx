import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        <BsLinkedin size={30} />
      </a>
      <a href="https://www.github.com/" target="_blank" rel="noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <FaFacebook size={30} />
      </a>
    </div>
  );
};

export default HeaderSocials;
