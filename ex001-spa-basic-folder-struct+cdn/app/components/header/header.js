spa.$('header', {
  data: { name: 'SPA', version:'js'},

  dataDefaults: { author:'Kumar' }
});

spa.$extend('header', {

  doSomething:function(){
    console.log(new Date()+'doing Something...');
  }

});