import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UrlLink from '../link';
import './Header.scss';


const Header = () => (
  <div className="header">
    <nav className="navbar nav navbar-expand-lg navbar-light">
      <a className="navbar-brand logo" href="/">
        Author`s Haven
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-1 mt-lg-0 nav-1">
          <UrlLink link="/ARTICLES" linkName="ARTICLES" />
          <UrlLink link="/ABOUT" linkName="ABOUT" />
          <UrlLink link="/CONTACT" linkName="CONTACT" />
        </ul>
        <div>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 nav-2">
            <UrlLink link="/login" linkName="LOGIN" />
            <UrlLink link="/signup" linkName="SIGN UP" />
          </ul>
          <form className="form-inline my-2 my-lg-0 search-form">
            <input
              className="form-control search-box"
              type="search"
              placeholder="Search"
            />
            <div className="input-group-btn">
              <button className="btn btn-default search-bt" type="submit">
                <FontAwesomeIcon icon="search" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
