import { post } from "../utils/helper";

export class PostFeedbackService {
  postFeedback = (stores) => {
    let data = {
      name: stores.feedbackStore.name,
      comment: stores.feedbackStore.comment
    };

    return post('/api/feedbacks', data)
      .then((response) => {
          stores.feedbackStore.updateSubmitMessage('success', 'success');
        }
      )
      .catch((response) => {
          stores.feedbackStore.updateSubmitMessage('danger', 'Please try again.');
        }
      );
  };
}

export default PostFeedbackService;
