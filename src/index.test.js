import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './components/App';


describe('Provider and App', () => {
  let app;
  let provider;
  let store;

  beforeEach(() => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const initialState = { article: {}, user: {} };
    store = mockStore(initialState);
    provider = shallow(<Provider store={store}><App /></Provider>);
    app = shallow(<App />);
  });

  it('renders <Provider/> correctly', () => {
    expect(provider).toMatchSnapshot();
  });

  it('renders <App/> correctly', () => {
    expect(app).toMatchSnapshot();
  });
});
