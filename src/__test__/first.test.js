import React from 'react';
import { shallow, mount } from 'enzyme';
import First from '../components/first.js';

describe('When Controlled  component is given', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<First />);
  });


  it('should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render div', () => {
    expect(wrapper.find('#nameDiv')).toHaveLength(1);
  });

  it('should render btn1', () => {
    expect(wrapper.find('#btn1')).toHaveLength(1);
  });

  it('should render .btn', () => {
    expect(wrapper.find('.btn')).toHaveLength(2);
  });
 
  it('should render Second component', () => {
    expect(wrapper.find('Second')).toHaveLength(1);
  });
});