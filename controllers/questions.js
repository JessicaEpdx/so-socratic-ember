MessageBoard.QuestionsController = Ember.ArrayController.extend({
  actions: {
    saveQuestion: function(){
      var newQuestion = this.store.createRecord('question', {
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image')
      });
      newQuestion.save();
    }
  }
});
