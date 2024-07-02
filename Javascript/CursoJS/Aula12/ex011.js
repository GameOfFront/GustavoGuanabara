var idade = 12
if (idade < 18){
    console.log('Menor de idade')
}else{
    console.log('Maior de idade')
}

var idade2 = 22
console.log(`Você tem ${idade2} anos.`)
if(idade2 < 16){
    console.log('Não vota.')
} else if (idade2 < 18 || idade2 > 65){
    console.log('Voto opcional')
}else{
    console.log('Voto obrigatório')
}


