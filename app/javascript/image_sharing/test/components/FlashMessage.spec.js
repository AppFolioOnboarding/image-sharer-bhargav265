import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Alert } from 'react-gears';
import FlashMessage from "../../components/FlashMessage";


describe('<FlashMessage />', () => {

    let sandbox;

    beforeEach(
      () => {
        sandbox = sinon.createSandbox();
      });

    afterEach(() => {
      sandbox.restore();
    });

    it('should render success', () => {
      let props;
        props = {
          stores: {
            feedbackStore: {
              submitMessage: {
                status: 'success',
                text: "hello"
              }
            }
          }
        };
        const wrapper = shallow(<FlashMessage{...props}/>).dive();
        console.log(wrapper.debug())
      expect(wrapper.find('[color="success"]')).to.have.lengthOf(1);
      expect(wrapper.find(Alert).render().text()).to.equal('hello');
      }
    );

  it('should render error', () => {
    let props;
    props = {
      stores: {
        feedbackStore: {
          submitMessage: {
            status: 'danger',
            text: "hello"
          }
        }
      }
    };
      const wrapper = shallow(<FlashMessage{...props}/>).dive();
      expect(wrapper.find('[color="danger"]')).to.have.lengthOf(1);
      expect(wrapper.find(Alert).render().text()).to.equal('hello');
    }
  );
  }
);
