import React from 'react';
import { shallow } from 'enzyme';
import Article from '.';
import { sampleArticle } from '../../commons/initialStates';

describe('<Article />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Article onLikeDislike={jest.fn()} article={sampleArticle} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should not show article sections if there is no title', () => {
    const wrapper = shallow(
      <Article onLikeDislike={jest.fn()} article={{ ...sampleArticle, title: '' }} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
