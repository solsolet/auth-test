'use strict'

const bcrypt = require('bcrypt');

//dades per a la simulació
const miPass = 'miContraseña';
const badPass = 'miotraContraseña';

//lo que volem fer tipo pseudocodi
// salt = bcrypt.salt( 10 );
// hash = bcrypt.has( miPass, salt );
// db.users.update(id, hash);
// db.account.hash.updated(id, salt);

//creem el Salt
bcrypt.genSalt(10, (err, salt) => {
    console.log(`Salt 1: ${salt}`);

    //utilitzam el Sal per a generar el hash
    bcrypt.hash( miPass, salt, (err, hash) => {
        if(err) console.log(err);
        else console.log(`Hash 1: ${hash}`);
    });
});

//creem el hash directament
bcrypt.hash( miPass, 10, (err, hash) => {
    if(err) console.log(err);
    else {
        console.log(`Hash 2: ${hash}`);

        // comprovem utilitzant la contraseña correcta
        bcrypt.compare( miPass, hash, (err, result)=>{
            console.log(`Result 2.1: ${result}`);
        });

        //comprovem utilitzant la contrassenya incorrecta
        bcrypt.compare( miPass, badPass, (err, result)=>{
            console.log(`Result 2.2: ${result}`);
        });
    };
});