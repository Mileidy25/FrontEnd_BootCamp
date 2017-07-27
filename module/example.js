// Patrón modular

function agenda() {
  const persons = [];

function agregar (name) {
  console.log("text of name", name);
  persons.push(name);
 }
 return {
   agregar: agregar;
   imprimir: imprimir;
   persons: persons
 }
}

const Agenda = agenda();
agenda.agregar("Felipe");
agenda.agregar("Celeste");
agenda = imprimir
console.log(Agenda.persons);


// módulo de manera simple

const persons = [];
function agregar (name) {
  persons.push(name);
 }
function imprimir() {
  console.log(persons);
}

module.exports = {
  agregar: agregar.
  imprimir: imprimir,
  persons: persons
};


// example of calculator

const calculadora = {
  valorBase: 0;
  sumar: fun (a,b) {
    return a + b;
  }
  restar: function (a, b)
  return:
 }
}

console.log(calculadora);


// alcance de una función

function padre() {
  const x = "soy x";
   function hijo() {
     const y = "soy y";
  console.log(x);
  }
  hijo();
  console.log(y);
}

padre();
