MessageBoard.EditQuestionController = Ember.ObjectController.extend({
  isUpdating: false,
  needs: ['question'],
  actions: {
    update: function() {
      this.set('isUpdating', true);
    },
    editQuestion: function() {
      var question = this.get('model');
      var id = this.get('model.id')
      question.save();
      this.set('isUpdating', false);
      this.transitionToRoute('question', id);

    },
    delete: function() {
      if(confirm('Are you sure?')) {
        var question = this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      };
    }
  }
});
