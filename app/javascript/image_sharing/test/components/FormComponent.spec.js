import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Button, FormRow } from 'react-gears';

import FormComponent from '../../components/FormComponent';

describe('<FormComponent />', () => {

  let sandbox;
  let props;

  beforeEach(
    () => {
      props = {
        stores: {
          feedbackStore: {
            updateName: sinon.spy(),
            updateComment: sinon.spy(),
            submitMessage: {
              status: '',
              text: ''
            }
          }
        }
      }
      sandbox = sinon.createSandbox();

    }

  );

afterEach(() => {
  sandbox.restore();
});

it('should render correctly', () => {
  const wrapper = shallow(<FormComponent{...props}/>).dive();
  expect(wrapper.find(FormRow).at(0)).to.have.length(1);
  expect(wrapper.find(FormRow).at(1)).to.have.length(1);
  expect(wrapper.find(Button).props()).to.include({
    color: 'primary'
  });
  }
);

it('should update name', () => {
  const wrapper = shallow(<FormComponent{...props}/>).dive();
  wrapper.find(FormRow).at(0).simulate('change', { target: { value: 'bhargav' } });
  expect(props.stores.feedbackStore.updateName.calledWith('bhargav')).to.be.true;
  }
);

it('should update comment', () => {
    const wrapper = shallow(<FormComponent{...props}/>).dive();
    wrapper.find(FormRow).at(1).simulate('change', { target: { value: 'bhargav' } });
    expect(props.stores.feedbackStore.updateComment.calledWith('bhargav')).to.be.true;
  }
);
  }
);
