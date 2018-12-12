import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '.';


describe('Test  pagination', () => {
  const article = {
    count: 4,
  };
  const pageNumber = '3';
  const Paginationwrapper = shallow(
    <Pagination article={article} pageNumber={pageNumber} />,
  );

  test('Snap shot pagination Component', () => {
    expect(Paginationwrapper).toMatchSnapshot();
  });
  test('Pagination should render correctly', () => {
    expect(Paginationwrapper.find('.pagination').length).toBe(1);
  });
});
