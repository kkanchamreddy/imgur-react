var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],

  getImage: function(id){
    Api.get('gallery/image/' + id + '/comments')
      .then(function(json){
        this.comments = json.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.comments);
  }

})
