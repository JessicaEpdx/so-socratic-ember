MessageBoard.EditQuestionController = Ember.ObjectController.extend({
  needs: ['question', 'answer'],
  actions: {
    edit: function() {
      var question = this.get('controllers.question.model');
      question.save();
    },
    delete: function() {
      if(confirm('Are you sure?')) {
        var answers = this.get('model.answers')
        var answerIds = [ ]
        answers.forEach(function(answer){
          answerIds.push(answer.id)
        });
        var question = this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      };
    }
  }
});
