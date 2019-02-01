import { action, observable, computed } from 'mobx';

export class FeedbackStore {
  /* Implement your feedback store*/
  @observable name = '';
  @observable comment = '';
  @observable submitMessage = {
    status: '',
    text: ''
  };

  @action
  updateName = (name) => {
    this.name = name;
  };
  @action
  updateComment = (comment) => {
    this.comment = comment;
  };
  @action
  updateSubmitMessage = (status, text) => {
    this.submitMessage.status = status;
    this.submitMessage.text = text
  };

  @computed get displayFlashMessage() {
    return this.submitMessage.status;
  }
}

export default FeedbackStore;
