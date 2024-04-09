// Repaso
let numero = 12;

if(numero % 2 === 0){
    // console.log(" es par");
}
else if(numero  % 3 === 0) {
    // console.log("es un multiple de 3")
}
else{
    // console.log("Es un numero impar");
}

// condicional Switch
let dia = 1;
let nombreDia;

switch (dia) {
    case 1:
        nombreDia="Lunes";
        break;
    case 2:
        nombreDia= "Martes";
        break;
    default:
        nombreDia ="Día no definido";
}
    // console.log(`Hoy es ${nombreDia}`);
    // console.log("Hoy es " + nombreDia)

// if ternario
let edad = 18;
let esMayorDeEdad = edad > 18 ? 'si' : 'No';

// ---------------------------------------------

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad:25
}

const propiedades = Object.keys(persona);
// console.log(propiedades);

const valores = Object.values(persona);
// console.log(valores);

const otraPersona = {...persona};
// console.log(otraPersona);

let {nombre, apellido, edad1} = persona

let jsonPersona = '{"nombre": "Juan","apellido":"perez", "edad" :30 }';
let persona1 = JSON.parse(jsonPersona);
// console.log(persona1)

let jsonPersona1 = '{"nombre": "Juan","apellido":"perez", "edad" :30 }';
let persona2 = JSON.stringify(jsonPersona1);
// console.log(persona2)

// ----------------------------------------------------------------

// Función constructora
function Persona(nombre, apellido, edad, ciudad){
    this.nombre =  nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.ciudad = ciudad;
}

const persona3 =  new Persona('Luis', 'Guillermo', 27 ,'Bogota');
// console.log(persona3);

// -------------------------------------------------------------------

function suma (num1, num2){
    return num1 + num2
}

function operacion (num1, num2, callback){
    const resultado = callback(num1, num2)
    return resultado
}

let resta = (num1, num2) =>{
    return num1 - num2
}

// console.log(operacion(4, 2, suma)) // 6
// console.log(operacion(4, 2, resta)) // 2