spa.$('sidebar', {
  target: '#divSidebar',
  style: '.',
  dataUrl: '@contacts',
  dataProcess: function(apiData) {
    return {
      contacts: apiData,
      sortOnField: 'first_name',
      sortByOrder: 'asc'
    }
  }
});

spa.$extend('sidebar', {

  title: function(gender){
    return (gender == "Male")? "Mr." : "Ms.";
  },

  refreshCallback: function(){
    console.log('refreshed the sidebar.', this.$data);
    app.header.updateTotalCount( this.$data['contacts'].length );
  },

  renderCallback: function(){
    console.log('sidebar renderCallback called');
    console.log(this.$data);
    app.header.updateTotalCount( this.$data['contacts'].length );

    app.eventManager.registerListener('CONTACTS_CHANGED', function(){

      // refresh the data
      console.log('refreshing the sidebar...');

      // re-render self without callback
      // spa.$render('sidebar', {
      //     renderCallback: null
      // });
      spa.$refresh('sidebar');

    });
  },

  viewProfile: function(id){
    spa.$render('viewContact', {
      dataUrlParams: {id: id}
    });

    //jquery animation
    $('html, body').animate({'scrollTop': '0px'});
  },
});
