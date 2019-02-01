import { expect } from 'chai';
import FeedbackStore from '../../stores/FeedbackStore';

describe('FeedbackStore' , () => {
  let feedbackStore;

  beforeEach(() => {
    feedbackStore = new FeedbackStore();
  });

  it('should initialise correctly', () => {
    expect(feedbackStore.name).to.equal('');
    expect(feedbackStore.comment).to.equal('');
    expect(feedbackStore.submitMessage.status).to.equal('');
    expect(feedbackStore.submitMessage.text).to.equal('');
  });

  it('should update name correctly', () => {
    feedbackStore.updateName('bhargav')
    expect(feedbackStore.name).to.equal('bhargav');
  });

  it('should update comment correctly', () => {
    feedbackStore.updateComment('bhargav')
    expect(feedbackStore.comment).to.equal('bhargav');
  });

  it('should update flash message correctly', () => {
    feedbackStore.updateSubmitMessage('bhargav', 'parsi');
    expect(feedbackStore.submitMessage.status).to.equal('bhargav');
    expect(feedbackStore.submitMessage.text).to.equal('parsi');
  });

  it('should test display flash message', () => {
    feedbackStore.updateSubmitMessage('bhargav', 'parsi');
    expect(feedbackStore.displayFlashMessage).to.equal('bhargav');
  });
} );
