import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Home from '../Home';
import LoginPage from '../../containers/LoginPage';
import Header from '../Header';
import { Footer } from '../Footer';
import SignUpPageConnected from '../../containers/SignUpPage';
import Articles from '../../containers/Articles';
import ArticlePageConnected from '../../containers/ArticlePage';

library.add(faSearch);

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPageConnected} />
        <Route path="/articles" component={Articles} />
        <Route path="/article/:articleId" component={ArticlePageConnected} />
      </Switch>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
