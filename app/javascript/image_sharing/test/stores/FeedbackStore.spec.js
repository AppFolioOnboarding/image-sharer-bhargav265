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
  });

  it('should update name correctly', () => {
    feedbackStore.updateName('bhargav')
    expect(feedbackStore.name).to.equal('bhargav');
  });

  it('should update comment correctly', () => {
    feedbackStore.updateComment('bhargav')
    expect(feedbackStore.comment).to.equal('bhargav');
  });
} );
