spa.$('viewData', {
  require: 'dataStore'
});

spa.$extend('viewData', {

  getTitle: function ( gender, fName ) {
    //return String
    console.log(arguments);
    return (gender == 'Male')? 'Mr.' : 'Ms.';
  },

  aFilter: function( item ) {
    //return true or false;
    console.log(item);
    return (item.gender == 'Male');
  }
});