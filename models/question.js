MessageBoard.Question = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
