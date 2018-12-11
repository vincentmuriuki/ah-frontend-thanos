import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Home.scss';
import Articles from '../../containers/Articles';
import Tags from '../TagList/viewTags';

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
          <div>
            <div className="righter-title">Popular Tags </div>
            {/* <Route path="/tags" component={Tags} /> */}
            <Tags />
          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>
);
export default Home;
