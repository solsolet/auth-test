'use strict'

const PassService = require ('./services/pass.service');
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

//encriptem el password
PassService.encriptaPassword( usuario.password )
    .then( hash => {
        usuario.password = hash;
        console.log(usuario);

        // verificar el password
        PassService.comparaPassword( miPass, usuario.password)
            .then( isOk => {
                if (isOk) {
                    console.log('p1: El pass es correcte');
                } else{
                    console.log('p1: El pass NO es correcte');
                }
            })
            .catch( err => console.log(err));

        // verificar el pass contra un pass falso
        PassService.comparaPassword( badPass, usuario.password)
            .then( isOk => {
                if (isOk) {
                    console.log('p2: El pass es correcte');
                } else{
                    console.log('p2: El pass NO es correcte');
                }
            })
            .catch( err => console.log(err));
    })