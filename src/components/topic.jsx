var React = require('react');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],

  getInitialState: function() {
    return {
      images: []
    }
  },

  componentWillMount: function() {
    Actions.getImages(this.props.params.id);
  },

  componentWillReceiveProps: function(nextProps) {
    Actions.getImages(nextProps.params.id);
  },

  render: function() {
    return <div> </div>
    /*  this.state.images.map(function(image){
        return <img src={image}/>

      })*/
  },

  onChange: function(event, images) {
    this.setState({
      images: images
    });
  }
})
