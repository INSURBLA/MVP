'use strict';
const {
  dialogflow,
  BasicCard,
  BrowseCarousel,
  BrowseCarouselItem,
  Button,
  Carousel,
  Image,
  LinkOutSuggestion,
  List,
  MediaObject,
  Suggestions,
  SimpleResponse,
  Table,
 } = require('actions-on-google');
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");


// initialise DB connection
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'ws://alfa-mvp-1-eaowux.firebaseio.com',
});

const app = dialogflow({debug: true});
/*-*/

/*
//Functions
app.intent('Precios[Incompleta]', (conv) => {
	conv.ask(new SimpleResponse({
		speech:"¿Sobre qué bicicleta te gustaría saber el precio?",
        text:"¿Sobre qué bicicleta te gustaría saber el precio?",
    }));
	conv.ask(new Suggestions(['Bicicleta de montaña', 'Bicicleta urbana', 'Bicicleta mixta']));
});


//Firestore integación
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  function TipoV(agent) {
    const tVehiculo = agent.parameters.tipo_vehiculo;

    agent.add(`Registramos su` + tVehiculo);



    return admin.database().ref('tipo_vehiculo').transaction((tipo_vehiculo) => {
      if(tipo_vehiculo !== null) {
        tipo_vehiculo.tipo = tVehiculo;
      }
      return tipo_vehiculo;
    }, function(error, isSuccess) {
      console.log('Update average age transaction success: ' + isSuccess);
    });

  }

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Tipo Vehiculo', TipoV);
  agent.handleRequest(intentMap);
});
*/

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
