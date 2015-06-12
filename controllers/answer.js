MessageBoard.AnswerController = Ember.ObjectController.extend({
  needs: ['answer'],
  actions: {
    delete: function() {
      if(confirm('Are you sure?')) {
        var answer = this.get('model').destroyRecord();
        var questionId = answer.get('question.id');
        this.transitionToRoute('question', questionId);
      };
    }
  }
});
