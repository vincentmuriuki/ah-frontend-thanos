import React from 'react';
import './Home.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Articles from '../../containers/Articles';

const Home = () => (
  <BrowserRouter>
    <div>
      <div className="header-img">
        <img src="https://picsum.photos/1440/300" alt="banner" />
      </div>
      <div className="home-body">
        <div className="lefter">
          <div className="lefter-title">Recent Articles</div>

          <hr />
          <Route path="/" component={Articles} />
        </div>
        <div className="righter">
          <div className="righter-title">Popular Tags</div>
        </div>
      </div>
    </div>
  </BrowserRouter>
);
export default Home;
