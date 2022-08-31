const nome = prompt("qual o seu nome?")                       
const email = prompt("qual o seu email?")
console.log(`o e-Mail ${email} foi cadastrado com sucesso boas vindas ${nome} `)  //frase de boas vindas 

console.log(`quantidade de characters: ${nome.length}` ) //contagem de characters 

const frase = `o e-Mail ${email} foi cadastrado com sucesso boas vindas ${nome} ` //const da frase


const novaFrase = frase.replaceAll( "r", "l")  //recolocacão 
console.log(novaFrase)

const verificiarletra = email.includes("@")                           //contador de @
console.log("o character da pessoa tem letra @?: " + verificiarletra)