import {render, act} from '@testing-library/react';
// import flushPromises from 'flush-promises';
// import userEvent from '@testing-library/user-event';
import Blog from '../Blog';

describe('Blog', () => {
  let context;
  beforeEach(() => {
    context = render(<Blog />);
  });
  describe('default setup', () => {
    it('renders the heading', () => {
      const {queryByText} = context;
      // expect(queryByText).toMatch('Blog');
    });
  });
});
