//pegar o input
//se for sim, mostra as categorias disponiveis, e pergunta qual categoria ela quer

//se ela escolher não, mostra todos os livros em orderm crescente pela quantidade de páginas



const livros = require("./database")
const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro?S/N')



if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log("Essas são as opções de categoria:")
    console.log("Vida Animal","/Infantil"," /Natureza","/Animais","/Planejamento","/Produtividade")
    const entradaCategoria = readline.question("Qual a categoria que voce escolhe?")

    const retorno = livros.filter(livros => livros.categoria === entradaCategoria)

    console.table(retorno)
}else{
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Essas sao todas as categorias disponiveis:')
    console.table(livrosOrdenados)
    console.log("Essas são as opções de categoria:")
    console.log("Vida Animal","/Infantil"," /Natureza","/Animais","/Planejamento","/Produtividade")
    const entradaCategoria = readline.question("Qual a categoria que voce escolhe?")

    const retorno = livros.filter(livros => livros.categoria === entradaCategoria)

    console.table(retorno)
}



