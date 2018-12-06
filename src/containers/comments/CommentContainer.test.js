import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Comments from './index';

describe('<SignUpPage />', () => {
  let CommentWrapper;

  beforeEach(() => {
    const props = {
      match: { params: { articleId: 1 } },
    };
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const initialState = { comments: {} };
    const store = mockStore(initialState);
    CommentWrapper = shallow(<Comments store={store} match={props.match} />);
  });

  it('should render the component', () => {
    expect(CommentWrapper).toMatchSnapshot();
  });

  test('Test if the component has a handleComments function', () => {
    const event = {
      preventDefault: () => { },
    };
    const wrapper = CommentWrapper.dive().instance();
    wrapper.handleComment(event);
  });

  test('Test if the component has a handleOnChange function', () => {
    const event = {
      preventDefault: () => { },
      target: () => { },
    };
    const wrapper = CommentWrapper.dive().instance();
    wrapper.handleOnChange(event);
  });
});
