// Las exportaciones ya se consideran un modulo 
//  podemos asignar 2 tipos o mas de datos a una variabre restrictivamente 

export let name: string | boolean = 'N4ndo';
export const age = 22;
export const isValido: boolean = true;

// No colocar codigo que se ejecute cuando el codigo sea leido la pirmera vez
// a menos que lo quieras pero con la exportacion ya se va a ejecutar el codigo
console.log({ isValido });

// aaun que las exportaciones esten arriba si modificacmos un valor este sera alterado ,por la compiacion a js
name = true;

export const templatestring = `Esto es un string 
multilinea 
que puede tener
' simple
"Dobles
inyectar valores ${isValido}
expresiones ${1 + 1}`;
console.log(templatestring)