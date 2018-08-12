spa.$extend('menu', {

  events: [
    { target:'a.link',
      onClick: function(){
        var compName = $(this).data('compName');
        spa.$render( compName );
      }
    }
  ]
});