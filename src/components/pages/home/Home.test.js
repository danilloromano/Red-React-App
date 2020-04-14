import React from 'react';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home render test', () => {

    it('Home should render correctly', () => {
        const wrapper = shallow(<Home />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

});