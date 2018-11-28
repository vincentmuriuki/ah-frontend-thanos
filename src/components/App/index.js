import React from "react";
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Header from "../Header";
import Message from "../../containers/Message";

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Message />
    </div>
  </BrowserRouter>
);
export default App;
