import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  it('should render given title', () => {
    const footerComponent = shallow(<Footer title={'hello'} />);
    expect(footerComponent.find('p').text()).to.equal('hello');
  });
})