import React from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import './Header.scss';
import logo from './../images/Logo.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__nav'>
        <nav className='header__nav__content'>
          <ul className='header__nav__content__items'>
            <li>
              <a className='header__nav__content__items-link' href='/'>
                HOME
              </a>
            </li>
            <li>
              <a className='header__nav__content__items-link' href='/'>
                ROOMS
              </a>
            </li>
            <li>
              <a className='header__nav__content__items-link' href='/'>
                SERVICES
              </a>
            </li>
            <li>
              <img
                src={logo}
                alt='Swiss Logo'
                className='header__nav__content__items__logo'
              />
            </li>
            <li>
              <a className='header__nav__content__items-link' href='/'>
                ABOUT US
              </a>
            </li>
            <li>
              <a className='header__nav__content__items-link' href='/'>
                GALLERY
              </a>
            </li>
            <li>
              <a className='header__nav__content__items-link' href='/'>
                BLOGS
              </a>
            </li>
          </ul>
        </nav>
        <div className='header__nav__toggle'>
          <BiMenuAltRight />
        </div>
      </div>
      <div className='header__slogan'>
        <div className='header__slogan__title'>RECONNECT WITH NATURE</div>
        <div className='header__slogan__description'>
          Fifteen minutes drive from the center of Dalat City is all it takes to
          get to this holiday haven. Dalat de Charm Village is all about luxury
          aesthetics and is the perfect sanctuary with a soul.
        </div>
      </div>
    </header>
  );
};

export default Header;
