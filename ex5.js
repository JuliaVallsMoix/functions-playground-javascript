/**
 * Extiende la función del ex4.
 * 
 * Ahora, también vamos a determinar el agua necesaria en función de la condición física del ciclista. 
 * 
 * Si la condición es 'buena', el ciclista necesita 0.5l por cada km
 * Si la condicion es 'regular', el ciclista necesita 0.6l por cada km
 * Si la condición es 'mala', el ciclista necesita 0.7l por cada km
 */

/** La función está incompleta */

function agua_necesaria(condicion, km) {
    let agua_por_km
    let litros_totales

    if (condicion == 'buena') {
        agua_por_km = 0.5
        console.log("Si la condición es " + condicion + " el ciclista necesita 0.5l por cada km.")
    }
    else if (condicion == 'regular') {
        agua_por_km = 0.6
        console.log("Si la condición es " + condicion + " el ciclista necesita 0.6l por cada km.")
    }
    else if (condicion == 'mala') {
        agua_por_km = 0.7
        console.log("Si la condición es " + condicion + " el ciclista necesita 0.7l por cada km.")
    }
    litros_totales = agua_por_km * km
    return litros_totales

}

let condicion = 'regular'
let km = 5
let agua = agua_necesaria(condicion, km)
console.log("Este ciclista deberia necesitar para recorrer " + km + " kilómetros " + agua + " litros de agua en total.")
agua_necesaria('buena', 5)