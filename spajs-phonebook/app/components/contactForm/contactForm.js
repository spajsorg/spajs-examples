spa.$('contactForm', {
  target: '#main',
  dataUrl: '@contact',

  dataProcess: function(resp) {
    console.log('dataProcessing the contactForm...', resp);
    return {
      contact: resp
    }
  }

});

spa.$extend('contactForm', {

  saveChanges: function() {
    var contact = spa.serializeFormToSimpleObject( '#frmContact' );

    spa.api[(contact.id)? 'put' : 'post']('@contact', //endPoint
      JSON.stringify(contact), //payLoad
      function(resp) { //onSuccess
        app.contactForm.viewContact(resp.id);
        app.eventManager.fireEvent('CONTACTS_CHANGED');
      },
      { ajaxOptions: {
          dataUrlParams: {id: contact.id},
          dataType: "json",
          error: function() {
            console.log('error', arguments);
          }
        }
      }
    );

  },

  viewContact: function(id) {
    if(!id) {
      spa.$render('home');
      return;
    }
    spa.$render('viewContact', {
      dataUrlParams: {id: id}
    });
  }
});