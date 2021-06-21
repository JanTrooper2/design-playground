import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, act} from '@testing-library/react'; // * add fireEvent if needed
import Advice, {DailyAdvice, PersonalAdvice, getAdvice} from '../Advice';
import flushPromises from 'flush-promises';

describe('Advice', () => {
  let component;
  describe('main component', () => {
    beforeEach(() => {
      component = render(<Advice />);
      return act(flushPromises);
    });
    describe('setup', () => {
      it('loads component correctly', () => {
        expect(component).toBeTruthy();
      });
    });
  });
  describe('daily advice component', () => {
    beforeEach(() => {
      const mockPromise = Promise.resolve(
        "Don't put off breaking up with someone when you know you want to. Prolonging the situation only makes it worse.",
      );
      component = render(<DailyAdvice advice={mockPromise} />);
      return act(flushPromises);
    });
    it('contains correct text content', () => {
      expect(component.container).toHaveTextContent(
        "Don't put off breaking up with someone when you know you want to. Prolonging the situation only makes it worse.",
      );
    });
  });
  describe('personal advice component', () => {
    beforeEach(() => {
      const mockPromise = Promise.resolve(
        "Don't put off breaking up with someone when you know you want to. Prolonging the situation only makes it worse.",
      );
      component = render(<PersonalAdvice advice={mockPromise} />);
      return act(flushPromises);
    });
    it('contains correct text content', () => {
      expect(component.container).toHaveTextContent(
        "Don't put off breaking up with someone when you know you want to. Prolonging the situation only makes it worse.",
      );
    });
  });
  describe('api call function', () => {
    it('returns correct Promise', () => {
      expect(
        getAdvice('https://api.adviceslip.com/advice/20'),
      ).resolves.toEqual(
        "Don't pt off breaking up with someone when you know you want to. Prolonging the situation only makes it worse.",
      );
    });
  });
});
