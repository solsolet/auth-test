'use strict'

const TokenService = require('./services/token.service');
const moment = require('moment');

//dades per a la simulació
const miPass = 'miContraseña';
const badPass = 'miOtraContraseña';
const usuario = {
    _id: '123456789',
    email: 'gsl21@alu.ua.es',
    displayName: 'Gemma Sellés',
    password: miPass,
    signUpDate: moment().unix(),
    lastLogin: moment().unix()
};

console.log(usuario);

// Creem un token
const token = TokenService.creaToken( usuario );
//console.log(token);

// Decodificar un token
TokenService.decodificaToken(token)
    .then( userId => {  //crear una promesa
        return console.log(`ID1: ${userId}`);
    })
    .catch( err => console.log(err));

// Decodificar un token erroni
const badToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Pxa9MlkMdaLnkjAAL2Xg0KNZCBYc58gxjOPr2rNfb2Q'
TokenService.decodificaToken(badToken)
.then( userId => {
    return console.log(`ID2: ${userId}`);
})
.catch( err => console.log(err));
