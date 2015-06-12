MessageBoard.EditQuestionController = Ember.ObjectController.extend({
  needs: ['question'],
  actions: {
    edit: function() {
      var foundQuestion = this.get('controllers.question.model');
      foundQuestion.save();
    },
    delete: function() {
      if(confirm('Are you sure?')) {
        var question = this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});
