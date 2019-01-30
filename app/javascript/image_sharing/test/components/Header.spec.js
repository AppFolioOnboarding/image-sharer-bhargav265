import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import Header from '../../components/Header';

describe('<Header />', () => {
  it('should render given title', () => {
    const headerComponent = shallow(<Header title={'hello'} />);
    expect(headerComponent.find('h3').text()).to.equal('hello');
  });
})