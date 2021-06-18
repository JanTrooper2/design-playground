import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent} from '@testing-library/react';
import Advice from '../Advice';

describe('Advice', () => {
  let component;
  beforeEach(() => {
    component = render(<Advice />);
  });
});
