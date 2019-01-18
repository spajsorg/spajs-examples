spa.$('viewData', {

  data: {

    //selIndex:#,selValue:*,selText:*

    selectedValueA: '2',
    selectedValueB: '02',
    selectedValueC: 'Feb',

    optionsS1: 'Jan,Feb,Mar',
    /*
    :options optionsS1

    <option value='Jan'>Jan</option>
    <option value='Feb'>Feb</option>
    <option value='Mar'>Mar</option>

    OR
    :options options1 'value:index'

    <option value='0'>Jan</option>
    <option value='1'>Feb</option>
    <option value='2'>Mar</option>
    */

    optionsS2: '01-Jan,02-Feb,03-Mar',
    optionsS3: '01=Jan,02=Feb,03=Mar',
    /*
    :options optionsS2
    :options optionsS3

    <option value='01'>Jan</option>
    <option value='02'>Feb</option>
    <option value='03'>Mar</option>
    */

    options1: [2000,2001,2002,2003,2004,2005],
    /*
    :options options1

    <option value='2000'>2000</option>
    <option value='2001'>2001</option>
    <option value='2002'>2002</option>

    OR
    :options options1 'value:index'

    <option value='0'>2000</option>
    <option value='1'>2001</option>
    <option value='2'>2002</option>
    */

    options2: ['Jan', 'Feb', 'Mar'],
    /*
    :options options2

    <option value='Jan'>Jan</option>
    <option value='Feb'>Feb</option>
    <option value='Mar'>Mar</option>

    OR
    :options options2 'value:index'

    <option value='0'>Jan</option>
    <option value='1'>Feb</option>
    <option value='2'>Mar</option>
    */

    options3 : [ '01-Jan', '02-Feb', '03-Mar' ],
    options4 : [ '01=Jan', '02=Feb', '03=Mar' ],
    options5A: [ ['Jan'], ['Feb'], ['Mar'] ],
    options5B: [ ['01', 'Jan'], ['02', 'Feb'], ['03', 'Mar'] ],
    options5C: [ ['01', 'Jan', 'January'], ['02', 'Feb', 'February'], ['03', 'Mar', 'March'] ],
    options6 : [ {'01': 'Jan'}, {'02': 'Feb'}, {'03': 'Mar'} ],
    options7 : {'01': 'Jan', '02':'Feb', '03':'Mar'},
    /*
    :options options3
    :options options4
    :options options5
    :options options6
    :options options7

    <option value='01'>Jan</option>
    <option value='02'>Feb</option>
    <option value='03'>Mar</option>
    */

    options8: [ {code:'01', name:'Jan'}, {code:'02', name:'Feb'}, {code:'03', name:'Mar'} ]
    /*
    :options options8 'value:code,text:name'

    <option value='01'>Jan</option>
    <option value='02'>Feb</option>
    <option value='03'>Mar</option>
    */
  }

});

spa.$extend('viewData', {

  filterOptionBool: function(optObj) {
    //console.log(optObj);
    return false;
  },

  atOptionsEnd:function(){
    //console.log('atEnd', arguments);
  },

  onOptionsEmpty:function(){
    //console.log('onEmpty', arguments);
  },

  filterOptionModify: function(optObj) {
    //console.log(optObj);
    optObj['text'] = optObj.index + '-' + optObj.value + '-' + optObj.text;
    return optObj;
  }

});