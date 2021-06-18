import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent} from '@testing-library/react';
import {prettyDOM} from '@testing-library/dom';
import Blog from '../Blog';

describe('Blog', () => {
  const entry = {
    title: 'Test Blog entry',
    body: 'Lorem Ipsum',
    author: 'test-application',
    id: 1,
  };
  const BlogEntry = ({entry}) => {
    return (
      <figure className={'blogEntry entry-' + entry.id} key={entry.id}>
        <h3>{entry.title}</h3>
        <p>{entry.body}</p>
      </figure>
    );
  };
  let component;
  beforeEach(() => {
    component = render(
      <Blog>
        <BlogEntry entry={entry}></BlogEntry>
      </Blog>,
    );
  });
  describe('default setup', () => {
    it('renders the heading', () => {
      expect(component.container).toHaveTextContent('Blog');
    });
    it('contains sample entries', () => {
      // console.log(component.container);
      // console.log(component.getByText('Blog'));
      // console.log(component.container.querySelector('.entry-1'));

      expect(component.container).toHaveTextContent('Test Blog entry');
    });
  });
  describe('testing tests setup', () => {
    it('debugs', () => {
      prettyDOM(component.container.querySelector('figure'));
      // component.debug();
    });
    it('presses Button', () => {
      const mockHandler = jest.fn();
      const button = render(<button onClick={mockHandler}>Hi</button>);
      fireEvent.click(button.getByRole('button'));
      expect(mockHandler.mock.calls).toHaveLength(1);
    });
  });
});
