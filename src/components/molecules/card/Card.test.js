import React from 'react';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme';
import Card from './Card';
import configureMockStore from 'redux-mock-store';

describe('Card render test', () => {

    const mockStore = configureMockStore();

    const initialState = {
        cardNumber: "",
        cardName: "",
        shelfLife: "",
        cvv: "",
        portionQuantity: 0,
        rotateCard: false,
        backImage: false,
      }
        const store = mockStore(initialState);

    it('Card should render correctly', () => {
        const wrapper = shallow(<Card store={store}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
});