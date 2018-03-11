spa.$extend('menu', {

  refresh: function (){
    spa.$render('viewData', {
      target:'#containerView'
    });
  }

});

