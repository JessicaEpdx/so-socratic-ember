MessageBoard.Answer = DS.Model.extend({
  answerDescription: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
