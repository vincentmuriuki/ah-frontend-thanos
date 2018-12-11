import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Home from '../Home';
import LoginPage from '../../containers/LoginPage';
import Header from '../Header';
import { Footer } from '../Footer';
import SignUpPageConnected from '../../containers/SignUpPage';
import Articles from '../../containers/Articles';

library.add(faSearch);

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPageConnected} />
      <Route path="/articles" component={Articles} />
      <Route path="/articles/:article_id" component={Articles} />
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
