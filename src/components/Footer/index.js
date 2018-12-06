import React from 'react';
import './index.scss';

const images = [
  'https://picsum.photos/200',
  'http://hairdiy.net/wp-content/uploads/2015/07/Angelina-Jolie-2.jpg',
  'https://picsum.photos/202',
  'https://picsum.photos/203',
  'https://picsum.photos/204',
  'https://picsum.photos/205',
  'https://picsum.photos/206',
  'https://picsum.photos/207',
];

export const CreateImage = image => (
  <div className="image-card" key={image}>
    <img src={image} alt="article image1" />
    <div className="carousel-caption d-none d-md-block">
      {/* <p>Article title 1</p> */}
    </div>
  </div>
);

export const FooterNextPrevious = (classname, icon, slidedata, buttonState) => (
  <a
    className={classname}
    href="#carouselExampleIndicators"
    role="button"
    data-slide={slidedata}
  >
    <span className={icon} aria-hidden="true" />
    <span className="sr-only">{buttonState}</span>
  </a>
);

export const Footer = () => (
  <div className="footer">
    <div className="carousel">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">{images.map(image => CreateImage(image))}</div>
          </div>
        </div>
        {FooterNextPrevious('carousel-control-prev', 'carousel-control-prev-icon', 'prev', 'Previous')}
        {FooterNextPrevious('carousel-control-next', 'carousel-control-next-icon', 'next', 'Next')}
      </div>
    </div>
    <div className="footer-bottom">
      <div className="copyright">
        <span>&copy; 2018 Authors Haven</span>
      </div>
      <div className="go-to-top">
        <span>Top</span>
      </div>
      <div className="nav-bottom">
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/article">ARTICLE</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
