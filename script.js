let inputnota01 = prompt ('Digite a primeira nota:')
let inputnota02 = prompt ('Digite a segunda nota:')
let inputnota03 = prompt ('Digite a terceira nota:')
let inputnota04 = prompt ('Digite a quarta nota:')

let nota01 = parseInt(inputnota01)
let nota02 = parseInt(inputnota02)
let nota03 = parseInt(inputnota03)
let nota04 = parseInt(inputnota04)

let media = (nota01 + nota02 + nota03 + nota04) / 4
let mediaMinima = 7 //sempre criar uma variável para médias para um futura atualização não precisar mexer em todo o código.
document.write (`Sua nota final foi: ${media}`)
document.write ('<br>')
console.log(media)

if (media >= mediaMinima) {
    document.write ('Aprovado!')
} 
else if (media < mediaMinima) {
    document.write ('Reprovado.')
}
document.write ('<br>')
if (media >= mediaMinima && media === 10) { //&& ele testa os dois e os dois precisa está verdadeiro.
    document.write ('NOSSA! você foi muito bem. Parabéns!')
}
else if (media >- mediaMinima && media === 9){
    document.write ('Você mandou muito bem!')

}