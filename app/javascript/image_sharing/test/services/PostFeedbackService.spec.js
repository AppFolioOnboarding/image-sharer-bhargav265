import { expect } from 'chai';
import sinon from 'sinon';
import * as apiHelper from "../../utils/helper";
import PostFeedbackService from '../../services/PostFeedbackService'

describe('PostFeedbackService', () => {

    let sandbox;
    let service;
    let params;
    let props;

    beforeEach(() => {
        props = {
          stores: {
            feedbackStore: {
              name: 'bhargav',
              comment: 'parsi',
              updateSubmitMessage: sinon.spy()
            }
          }
        }
        sandbox = sinon.createSandbox();
        service = new PostFeedbackService();

      }

    );

    afterEach(() => {
      sandbox.restore();
    });

    it('success feedback', () => {
      let response = {
        message: 'hello'
      };
        const postStub = sandbox.stub(apiHelper, 'post').resolves(response);
        return service.postFeedback(props.stores).then((result) => {
          sinon.assert.calledOnce(postStub);
          expect(props.stores.feedbackStore.updateSubmitMessage.calledWith('success', 'success')).to.be.true;
          }
        );
      }
    );

  it('error feedback', () => {
      let response = {
        message: 'hello'
      };
      const postStub = sandbox.stub(apiHelper, 'post').returns(Promise.reject(response));
      return service.postFeedback(props.stores).then((result) => {
          sinon.assert.calledOnce(postStub);
          expect(props.stores.feedbackStore.updateSubmitMessage.calledWith('danger', 'Please try again.')).to.be.true;
        }
      );
    }
  );

  }
);

