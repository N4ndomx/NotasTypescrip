export const pokemon_id = [1, 2, 3, 4, 5];
// // aun que type muestre error js si deja
// pokemon_id.push('Hola');
// // conversion rapida a numero en ves de number()
// pokemon_id.push(+'1');
// console.log(pokemon_id)

// Trabajar con obj literales
// si queremos agregar ciertas validaciones o segurarnos de que un obj tiene estas propiedades 
// o tener siempre un nombre 
// debdemos utilizar interface
// export const pokemon = {
//     id: 1,
//     name: 'Nosexd',
//     age :12
// }
// las interfaces simre empizan con mayuscula 
// obligamos a que los q imp la interfaces deben tener esos datos si osi 
interface Pokemon {
    id: number,
    name: string
    // con el ? junto del nombre typs sabe que puede que ese valor sea nulo o que no exista 
    age: number

}
export const pokemon: Pokemon = {
    // la mayoria de los datos de la imple debe de venir
    id: 1,
    name: 'Nosexd',
    age: 0
}

// Una interface no podemos inst a diferencia de una clase en types
console.log(pokemon)


////-----------------------------------
export const pokes: Pokemon[] = [];
pokes.push(pokemon);
console.log(pokes)

// No es lo mismo un objeto a una clase !!!!!!