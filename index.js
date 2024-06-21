/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const repromptOutput = '¿Hay algo más en lo que te pueda ayudar?';

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenidos a Calculadora UTHH Deisi, ¿En qué puedo ayudarte?"';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repromptOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';
        
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
              .reprompt(repromptOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SumaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SumaIntent';
    },
    handle(handlerInput) {
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(cantidad);
        const numero2 = Number(cantidadd);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak("Lo siento, no pude entender los números. Por favor, intente de nuevo")
                .reprompt(repromptOutput)
                .getResponse();
        }

        const resultado = numero1 + numero2;
        const speakOutput = `Calculadora UTHH... El resultado de la suma de ${numero1} más ${numero2} es igual a ${resultado}.`;
     
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repromptOutput)
            .getResponse();
    }
};

const RestaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestaIntent';
    },
    handle(handlerInput) {
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(cantidad);
        const numero2 = Number(cantidadd);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak("Lo siento, no pude entender los números. Por favor, intente de nuevo")
                .reprompt(repromptOutput)
                .getResponse();
        }

        const resultado = numero1 - numero2;
        const speakOutput = `Calculadora UTHH... El resultado de la resta de ${numero1} menos ${numero2} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repromptOutput)
            .getResponse();
    }
};

const MultiplicacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicacionIntent';
    },
    handle(handlerInput) {
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(cantidad);
        const numero2 = Number(cantidadd);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak("Lo siento, no pude entender los números. Por favor, intente de nuevo")
                .reprompt(repromptOutput)
                .getResponse();
        }

        const resultado = numero1 * numero2;
        const speakOutput = `Calculadora UTHH... El resultado de la multiplicación de ${numero1} por ${numero2} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repromptOutput)
            .getResponse();
    }
};

const DivisionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivisionIntent';
    },
    handle(handlerInput) {
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(cantidad);
        const numero2 = Number(cantidadd);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak("Lo siento, no pude entender los números. Por favor, intente de nuevo")
                .reprompt(repromptOutput)
                .getResponse();
        }

        if (numero2 === 0) {
            return handlerInput.responseBuilder
                .speak("Lo siento, no puedo dividir por cero. Por favor, intente con otro número")
                .getResponse();
        }

        const resultado = numero1 / numero2;
        const speakOutput = `Calculadora UTHH... El resultado de la división de ${numero1} entre ${numero2} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repromptOutput)
            .getResponse();
    }
};
const PotenciaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PotenciaIntent';
    },
    handle(handlerInput) {
        const base = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const exponente = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numeroBase = Number(base);
        const numeroExponente = Number(exponente);

        if (isNaN(numeroBase) || isNaN(numeroExponente)) {
            return handlerInput.responseBuilder
                .speak("Lo siento, no pude entender los números. Por favor, intente de nuevo")
                .reprompt(repromptOutput)
                .getResponse();
        }

        const resultado = Math.pow(numeroBase, numeroExponente);
        const speakOutput = `Calculadora UTHH... El resultado de ${numeroBase} elevado a la potencia de ${numeroExponente} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repromptOutput)
            .getResponse();
    }
};




const RaizCuadradaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RaizCuadradaIntent';
    },
    handle(handlerInput) {
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const numero = Number(cantidad);

        if (isNaN(numero) || numero < 0) {
            return handlerInput.responseBuilder
                .speak("Lo siento, no pude entender el número o el número es negativo. Por favor, intente de nuevo")
                .reprompt(repromptOutput)
                .getResponse();
        }

        const resultado = Math.sqrt(numero);
        const speakOutput = `Calculadora UTHH... El resultado de la raíz cuadrada de ${numero} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repromptOutput)
            .getResponse();
    }
};


const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        MultiplicacionIntentHandler,
        DivisionIntentHandler,
        PotenciaIntentHandler,
        RaizCuadradaIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
