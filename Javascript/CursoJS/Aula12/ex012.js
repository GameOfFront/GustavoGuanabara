var data = new Date()
var hora = data.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if(5<=hora && hora<=12){
    console.log('Bom dia!')
}else if(13<= hora && hora <=18){
    console.log('Boa tarde')
}else if(1<= hora && hora <= 4){
    console.log('Boa madrugada')
}else{
    console.log('Boa Noite!')
}






