import React from 'react';
import DogIpsum from '../ipsum/DogIpsum';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
describe('DogIpsum', () => {
  let component;
  const factURL =
    'https://cors.bridged.cc/https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=10';
  beforeEach(() => {
    component = render(<DogIpsum factURL={factURL}></DogIpsum>);
  });
  describe('intitial state', () => {
    it('does not display the fact text', () => {
      const {queryByText} = component;
      expect(
        queryByText(
          'The phrase "raining cats and dogs" originated in seventeenth-century England. During heavy rainstorms, many homeless animals would drown and float down the streets, giving the appearance that it had actually rained cats and dogs.',
        ),
      ).toBeNull();
    });
    it('contains a button called Random Dog Fact', () => {
      const {queryByText} = component;
      expect(queryByText('Random Dog Fact')).not.toBeNull();
    });
  });
  describe('interaction', () => {
    // There should be a test that checks whether the right fact is displayed, but there is an issue with testing state updating components that I have to figure out first.
    it('adds the dog fact when clicking the button', async () => {
      fireEvent.click(component.getByRole('button'));
      await tick();
      expect(component.container).toHaveTextContent('Your Dog Fact:');
    });
    function tick() {
      return new Promise(resolve => {
        setTimeout(resolve, 0);
      });
    }
  });
});
