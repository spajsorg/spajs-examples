spa.$('viewContact', {
  target: '#main',
  dataUrl: '@contact',
  dataProcess: function (resp) {
      resp.image_cat = resp.gender == "Male" ? "men" : "women";
      //resp.title = resp.gender == "Male" ? "Mr." : "Ms.";
      return {
        contact: resp
      }
  }
  // data: {
  //     contact: {
  //         "id": 4,
  //         "first_name": "Adelbert",
  //         "last_name": "Elletson 123",
  //         "gender": "Female",
  //         "email": "aelletson3@1und1.de",
  //         "phone": 57384185362,
  //         "dob": "1988-08-13",
  //         "address": "2829 Artisan Hill",
  //         "city": "Columbia",
  //         "state": "Missouri",
  //         "country": "United States"
  //     }
  // }
});

spa.$extend('viewContact', {
  c: {},

  renderCallback: function() {
    console.log(this.$data);
    this.c = this.$data.contact;
  },

  deleteContact: function(){
    var url = spa.api.url('@contact', { id: this.c.id });
    spa.api.del(url, function(resp) {
      spa.$render('home');
      app.eventManager.fireEvent('CONTACTS_CHANGED');
    });
  },

  editContact: function() {
    spa.$render('contactForm', {
      dataUrlParams: {id: this.c.id}
    });
  }

});