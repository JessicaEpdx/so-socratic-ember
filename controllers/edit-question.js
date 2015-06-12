MessageBoard.EditQuestionController = Ember.ObjectController.extend({
  isUpdating: false,
  needs: ['question'],
  actions: {
    update: function() {
      this.set('isUpdating', true);
    },
    editQuestion: function() {
      var question = this.get('model');
      question.save();
      this.set('isUpdating', false);
    },
    delete: function() {
      if(confirm('Are you sure?')) {
        var question = this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      };
    }
  }
});
