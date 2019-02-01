import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import App from '../../components/App';
import FormComponent from "../../components/FormComponent";

describe('<App />', () => {
  it('should render app contents', () => {
    const appComponent = shallow(<App />);
    expect(appComponent.find(Header).props().title).to.equal('Tell us what you think');
    expect(appComponent.find(Header)).to.have.lengthOf(1);
    expect(appComponent.find(Footer).props().title).to.equal('Copyright: AppFolio Inc. Onboarding');
    expect(appComponent.find(Footer)).to.have.lengthOf(1);
    expect(appComponent.find(FormComponent)).to.have.lengthOf(1);
  });
});
