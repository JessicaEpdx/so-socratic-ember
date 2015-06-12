MessageBoard.QuestionsController = Ember.ArrayController.extend({
  isQuestioning: false,
  actions: {
    addQuestion: function(){
      this.set('isQuestioning', true);
    },
    saveQuestion: function(){
      var newQuestion = this.store.createRecord('question', {
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image')
      });
      newQuestion.save();
      this.set('isQuestioning', false);
      this.set('name', "")
      this.set('description', "")
      this.set('image', "")

    }
  }
});
