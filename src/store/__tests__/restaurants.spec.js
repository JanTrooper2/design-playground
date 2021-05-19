import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import restaurantsReducer from '../restaurants/reducers';
import {loadRestaurants} from '../restaurants/actions';

describe('restaurants', () => {
  let store;
  describe('initially', () => {
    it('does not have the loading flag set', () => {
      const initialState = {};

      const store = createStore(
        restaurantsReducer,
        initialState,
        applyMiddleware(thunk),
      );

      expect(store.getState().loading).toEqual(false);
    });
  });

  describe('loadRestaurants action', () => {
    beforeEach(() => {
      const api = {
        loadRestaurants: () => new Promise(() => {}),
      };
      const initialState = {
        records: [],
      };
      store = createStore(
        restaurantsReducer,
        initialState,
        applyMiddleware(thunk.withExtraArgument(api)),
      );
      return store.dispatch(loadRestaurants());
    });

    describe('when loading succeeds', () => {
      const records = [
        {id: 1, name: 'Sushi Place'},
        {id: 2, name: 'Pizza Place'},
      ];

      it('stores the restaurants', () => {
        expect(store.getState().records).toEqual(records);
      });

      it('clears the loading flag', () => {
        expect(store.getState().loading).toEqual(false);
      });
    });
  });

  describe('while loading', () => {
    it('sets a loading flag', () => {
      store.dispatch(loadRestaurants());

      expect(store.getState().loading).toEqual(true);
    });
  });
});
