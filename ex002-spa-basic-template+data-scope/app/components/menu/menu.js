spa.$extend('menu', {

  viewProfile: function (){
    spa.$render('profileView', {
      target:'#mainStage'
    });
  }

});

