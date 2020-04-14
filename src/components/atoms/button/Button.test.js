import React from 'react';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button render test', () => {
   const handleClick = jest.fn();
   
    const defaultProps = {
        handleClick,
        text: 'OI'
    }

    defaultProps.handleClick.mockClear();

    it('should render correctly with props', () => {
        const wrapper = shallow(<Button {...defaultProps} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it('should click on button and call handleClick funcion props', () => {
        const wrapper = shallow(<Button {...defaultProps} />)
        wrapper.find('.btn__default').simulate('click');
        expect(defaultProps.handleClick).toHaveBeenCalled();
    });
});
