import expect from 'expect';
import alertMessage from './alertMessage';

describe('alert message', () => {
  it('contains correct error message heading', () => {
    expect(alertMessage).toEqual(expect.objectContaining({ title: 'Problem encountered' }));
  });
});
