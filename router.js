MessageBoard.Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('question', {path: ':question_id'});
});
