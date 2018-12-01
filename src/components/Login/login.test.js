import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Login from './index';

it('testing login', () => {
  shallow(
    <MemoryRouter>
      <Login onChange={jest.fn} onSubmit={jest.fn} />
    </MemoryRouter>,
  );
});
