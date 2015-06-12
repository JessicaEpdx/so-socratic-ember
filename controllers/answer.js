MessageBoard.AnswerController = Ember.ObjectController.extend({
  needs: ['answer'],
  actions: {
    delete: function() {
      if(confirm('Are you sure?')) {
        var questionId = this.get('question.id');
        var answer = this.get('model').destroyRecord();
        this.transitionToRoute('question', questionId);
      };
    }
  }
});
