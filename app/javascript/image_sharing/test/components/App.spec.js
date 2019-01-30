import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import App from '../../components/App';


describe('<App />', () => {
  it('should render 1 header and 1 footer', () => {
    const appComponent = shallow(<App />);
    expect(appComponent.find(Header).props().title).to.equal('Tell us what you think');
    expect(appComponent.find(Header)).to.have.lengthOf(1);
    expect(appComponent.find(Footer).props().title).to.equal('Copyright: AppFolio Inc. Onboarding');
    expect(appComponent.find(Footer)).to.have.lengthOf(1);
  });
})
