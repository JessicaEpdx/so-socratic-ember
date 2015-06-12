MessageBoard.EditQuestionController = Ember.ObjectController.extend({
  needs: ['question', 'answer'],
  actions: {
    edit: function() {
      var question = this.get('controllers.question.model');
      question.save();
    },
      delete: function() {
        if(confirm('Are you sure?')) {
          var question = this.get('model').destroyRecord();
          this.transitionToRoute('questions');
        };
      },
    }
});
