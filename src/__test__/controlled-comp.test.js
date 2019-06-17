import React from 'react';
import { shallow } from 'enzyme';
import ControlledComp from '../components/controlled-comp.js';

describe('When Controlled  component is given', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ControlledComp />);
    });


    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render userName', () => {
        expect(wrapper.find('#userName')).toHaveLength(1);
    });

    it('should render sapId', () => {
        expect(wrapper.find('#sapId')).toHaveLength(1);
    });

    it('should render button', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });
    describe('When onChange event is not triggered on userName field', () => {
        it('should have empty state', () => {
            expect(wrapper.state().formData.userName).toEqual('');
        });
    });

    describe('When onChange event is not triggered on sapId field', () => {
        it('should have empty state', () => {
            expect(wrapper.state().formData.sapId).toEqual('');
        });
    });

    describe('When onChange event triggered on userName field', () => {
        beforeEach(() => {
            const userName = wrapper.find('#userName');
            userName.simulate('change', { target: { name: 'userName' , value: 'radha.n@hcl.com' } });
        })
        it('should have update the state', () => {
            expect(wrapper.state().formData.userName).toEqual('radha.n@hcl.com');
        })
    });
    describe('When onChange event triggered on sapId field', () => {
        beforeEach(() => {
            const sapId = wrapper.find('#sapId');
            sapId.simulate('change', { target: {  name: 'sapId' ,value: '1234' } });
        })
        it('should have update the state', () => {
            expect(wrapper.state().formData.sapId).toEqual('1234');
        })
    });


describe('When submit button is clicked', () => {
    beforeEach(() => {
      wrapper.find('#userName').simulate('change', { target: { name: 'userName' ,value: 'radha.n@hcl.com' } });
      wrapper.find('#sapId').simulate('change', { target: { name: 'sapId' ,value: 'Test@123' } });

      const fakeEvent = { preventDefault: () => console.log('preventDefault') };
      const submit = wrapper.find('button');
      submit.simulate('click', fakeEvent);
    });

    it('should have excepted userName', () => {
      expect(wrapper.state().formData.userName).toEqual('radha.n@hcl.com');
    });

    it('should have excepted Password', () => {
      expect(wrapper.state().formData.sapId).toEqual('Test@123');
    });
  });


});