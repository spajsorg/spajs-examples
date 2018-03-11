/* To mock live api urls with local static data; default false */
spa.api.mock = true; //comment this line when LIVE APIs are available

/* If live-api-server is not same as front-end-ui server; */
//spa.api.baseUrl = 'https://api.server.host:port/';

/* live-api url prefix to identify Live-Api calls */
app['api'] = { liveApiPrefix: 'spa-api/' };

$.extend(spa.api.urls, {

  contacts: 'spa-api/contacts',
  contact : 'spa-api/contacts/{id}'

});