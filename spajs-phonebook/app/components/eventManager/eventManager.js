spa.$('eventManager', {
  template: ''
});

spa.$extend('eventManager', {
  listeners: {},

  renderCallback: function(){
    //console.log('EventManager called!');
  },

  registerListener: function(event, callback) {
    if(!(event in this.listeners)) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  },

  fireEvent: function(event) {
    this.listeners[event].forEach(function(callback) {
      callback();
    });
  }
})