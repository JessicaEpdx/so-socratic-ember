MessageBoard.QuestionController = Ember.ObjectController.extend({
  isAnswering: false,
  needs: ['question'],
  actions: {
    addAnswer: function(){
      this.set('isAnswering', true);
    },
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
      
      this.set('answerName', "");
      this.set('answerDescription', "");
      this.set('answerImage', "");

      this.set('isAnswering', false);

    }
  }
});
