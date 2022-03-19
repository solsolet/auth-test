'use strict'

// formato del hash
//  
//  

const bcrypt = require('bcrypt');

// encripta pssw

function encriptaPassword( password ) {
    return bcrypt.hash( password, 10 );
}

// comparaPassword
//
// Devolver verdadero o falso si coinciden o no el pass y hash

function comparaPassword( password, hash ){
    return bcrypt.compare( password, hash);
}

module.exports = {
    encriptaPassword,
    comparaPassword
}