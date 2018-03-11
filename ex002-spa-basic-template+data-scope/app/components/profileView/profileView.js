spa.$('profileView', {
  require: 'dataStore',

  data: {
    member: {
      name: 'Name in [profileView] component base scope'
    }
  },

  dataDefaults: {
    defName: 'Default Name in [profileView] component base scope'
  }

});

spa.$extend('profileView', {

  member: { name: 'Name in [profileView] component extended scope' },

});