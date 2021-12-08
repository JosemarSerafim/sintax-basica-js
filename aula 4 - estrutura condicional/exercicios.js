var lista1 = ['acordar','comer','almoçar'];
var object = {
    nome: 'josemar',
    idade:27,
    sexo: 'M'
};


//apresentar os itens usando o for/in
// for(i in lista1) {
//     console.log(lista1[i]);
// }

//apresentando a lista usando o for/of
// for(i of lista1){
//     console.log(i)
// }

//com objecto
for(i of object.sexo) {
    console.log(i)
}