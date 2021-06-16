import React from 'react';
import DogIpsum from '../ipsum/DogIpsum';
import {render, fireEvent} from '@testing-library/react';

describe('DogIpsum', () => {
  let component;
  const fact = {
    fact: 'Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful.',
  };
  beforeEach(() => {
    component = render(<DogIpsum></DogIpsum>);
  });
  describe('intitial state', () => {
    it('does not display the fact text', () => {
      const {queryByText} = component;
      expect(
        queryByText(
          'Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful.',
        ),
      ).toBeNull();
    });
    it('contains a button called Random Dog Fact', () => {
      const {queryByText} = component;
      expect(queryByText('Random Dog Fact')).not.toBeNull();
    });
  });
});
