MessageBoard.Answer = DS.Model.extend({
  answerName: DS.attr(),
  answerImage: DS.attr(),
  answerDescription: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
