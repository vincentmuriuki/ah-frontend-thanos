import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';

describe('Header', () => {
  it('onClick doesnot crash Header', () => {
    localStorage.setItem('token', 'trtyryr');
    const wrapper = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(() => wrapper.find('#logout').first().prop('onClick')()).not.toThrow();
  });
});
