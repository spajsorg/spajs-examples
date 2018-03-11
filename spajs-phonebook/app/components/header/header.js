spa.$('header', {
  target: '#divHeader'
});

spa.$extend('header', {
  updateTotalCount: function(count){
    setTimeout( function(){
      spa.bindData('#c_header', {count: count} );
    }, 5);
  },

  addNewContact: function () {
    // spa.$render('contactForm', {
    //   data: { id: undefined }
    // });

    spa.$render('contactForm', {
      data: { }
    });

  }
});