var escopo = "Normal"

function var_escopo(){
    escopo = "Mudei"
}

var_escopo()
console.log(escopo)

let escopo_let = "Oi"

function let_escopo(){
  let escopo_let = "Mudei_let"
  console.log(escopo_let)
}

let_escopo()
console.log(escopo_let)

const escopo_const = "Constante"

function const_escopo(){
  const escopo_const = "Constante_função"
  console.log(escopo_const)
}
const_escopo()
//escopo_const = "Nova const"; Constante não pode ser redeclarada
console.log(escopo_const)

var notas = [1,2]
console.log(notas)
notas.push(3) //Adiciona um 3 no final da lista
console.log(notas)
notas.pop() //Retira o elemento mais a direita da lista
console.log(notas)
notas.shift() //Retira o elemento mais a esquerda da lista
console.log(notas)
notas.unshift(1) //Adiciona um elemento no início da lista
console.log(notas)