// var jogador1 = 1;
// var jogador1 = 0;

// var placar;

// console.log("o jogador 1 marcou pontos")


var array = ['valor1', 'valor2', 'valor3','valor4'];
var object = {propriedade1:'valor1', propriedade2:'valor2', propriedade3:'valor3'}

//for - executa a instrução até que ela seja falsa
// for(var i = 0; i < array.length; i++){
//     console.log(i);
// }

// for/in - executa a repetição apartir de uma propriedade
// for(i in array){
//     console.log(i);
// }

// for com objectos
// for(i in object){
//     console.log(i);
// }

// for/of - executa a repetição apartir de um valor3
for(i of array){
    console.log(i);
}

//for/of com objecto

for(i of object.propriedade1){
    console.log(i);
}