MessageBoard.EditQuestionController = Ember.ObjectController.extend({
  needs: ['question'],
  actions: {
    edit: function() {
      var question = this.get('controllers.question.model');
      question.save();
    }
  }
});
