import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    //function where we fetch data
    var url = `http://itp-api.herokuapp.com/api/artists/${params.id}/songs/`;
    return $.getJSON(url);
  },
  afterModel: function(model) {
    console.log(model);
  }
});
