import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react'; // * add fireEvent if needed
import Advice, {DailyAdvice, PersonalAdvice} from '../Advice';

describe('Advice', () => {
  let component;
  const link = 'https://api.adviceslip.com/advice/20';
  describe('main component', () => {
    beforeEach(() => {
      component = render(<Advice />);
    });
    describe('setup', () => {
      it('loads component correctly', () => {
        expect(component).toBeTruthy();
      });
    });
  });
  describe('daily advice component', () => {
    beforeEach(() => {
      component = render(<PersonalAdvice link={link} />);
    });
    it('contains correct text content', () => {
      expect(component.container).toHaveTextContent(
        "Don't put off breaking up with someone when you know you want to. Prolonging the situation only makes it worse.",
      );
    });
  });
  describe('personal advice component', () => {
    beforeEach(() => {
      component = render(<DailyAdvice link={link} />);
    });
    it('contains correct text content', () => {
      expect(component.container).toHaveTextContent(
        "Don't put off breaking up with someone when you know you want to. Prolonging the situation only makes it worse.",
      );
    });
  });
});
