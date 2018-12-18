import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './components/App';

describe('Provider and App', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = { article: {}, user: {} };
  const store = mockStore(initialState);
  const provider = shallow(<Provider store={store}><App /></Provider>);
  const app = shallow(<App />);

  it('renders <Provider/> correctly', () => {
    expect(provider).toMatchSnapshot();
    expect(app).toMatchSnapshot();
  });
});
