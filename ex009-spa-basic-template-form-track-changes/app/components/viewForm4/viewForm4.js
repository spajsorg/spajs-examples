spa.$('viewForm4', {

  target: '#containerComponent',

  style: '.',

  data: {
    "id": 1,
    "firstName": "Cordey",
    "lastName": "Janous",
    "email": "em@ail.com",
    "gender": "Female",
    "active": true
  }

});

spa.$extend('viewForm4', {

  beforeChange: function( isEnable ){

    console.log('Button to be Enabled ', isEnable);

    //do something and return true/false
    //true: to enable the button
    //false: to disable the button

    return !isEnable;

  }

});