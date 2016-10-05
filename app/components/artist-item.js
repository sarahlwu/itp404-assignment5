import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['song'],
  title: this.get(song.title),
  price: this.get(song.price),
  playCount: this.get('song.playCount'),
  isExpensive: Ember.computed('song.price', function() {
    return this.get('song.price') > 1;
  }),
  isPopular: Ember.computed('song.playCount', function() {
    return this.get('song.playCount') >= 20;
  })
});
