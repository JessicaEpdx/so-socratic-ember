MessageBoard.Router.map(function() {
  this.resource('publicLots', {path:'/'});
  this.resource('publicItems');
  this.resource('lots');
  this.resource('add-lot');
  this.resource('lot', {path:'lots/:lot_id'});
  this.resource('publicLot', {path:'publiclots/:lot_id'});
  this.resource('item', {path:'items/:item_id'});
  this.resource('publicItem', {path:'publicItems/:item_id'});

});
