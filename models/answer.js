MessageBoard.Answer = DS.Model.extend({
  answerName: DS.attr(),
  answerTitle: DS.attr(),
  answerDescription: DS.attr(),
  answerImage: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
