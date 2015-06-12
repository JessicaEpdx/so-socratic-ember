MessageBoard.QuestionController = Ember.ObjectController.extend({
  needs: ['question'],
  actions: {
    saveAnswer: function(){
      var newAnswer = this.store.createRecord('answer', {
        answerName: this.get('answerName'),
        answerDescription: this.get('answerDescription'),
        answerImage: this.get('answerImage')
      });
      newAnswer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(newAnswer);
      question.save();
    }
  }
});
