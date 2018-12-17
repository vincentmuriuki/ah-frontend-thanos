import React from 'react';
import {
  Router, Route, Switch,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import history from '../../commons/history';
import Home from '../Home';
import LoginPage from '../../containers/LoginPage';
import Header from '../../containers/Header';
import { Footer } from '../Footer';
import SignUpPageConnected from '../../containers/SignUpPage';
import Articles from '../../containers/Articles';
import ArticlePageConnected from '../../containers/ArticlePage';
import ProfileConnected from '../../containers/profiles/profiles';
import EditProfilePageConnected from '../../containers/profiles/editProfile';
import SearchPage from '../../containers/SearchPage';

library.add(faSearch);
const App = () => (
  <Router history={history}>
    <React.Fragment>
      <Header history={history} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPageConnected} />
        <Route path="/articles" component={Articles} />
        <Route path="/article/:articleId" component={ArticlePageConnected} />
        <Route path="/profile" component={ProfileConnected} />
        <Route path="/profiles/edit" component={EditProfilePageConnected} />
        <Route path="/search" component={SearchPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  </Router>
);

export default App;
