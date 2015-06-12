MessageBoard.Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('question', {path: 'questions/:question_id'})
  this.resource('edit-questions');
  this.resource('edit-question', {path: 'edit-questions/:question_id'})
  this.resource('answer', {path: 'answers/:answer_id'})
  this.resource('answers');

});
