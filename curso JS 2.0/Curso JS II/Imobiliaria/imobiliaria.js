
let salvarImovel= [ ]
let opcao = ""

do{ 
    
    opcao = prompt (
        "Imóveis cadastrados: " + salvarImovel.length + 
        "\nBom dia vendedor(a), tudo bem??\n" +
    "\nEscolha uma das opçoes:\n1. Adicione um imóvel a nossa imobiliaria \n2. Listar imoveis \n3.Sair")

    switch (opcao){

    case "1":
        let novoImovel= {}
        novoImovel.nome = prompt("Digite o nome do proprietario:")
        novoImovel.quartos = prompt("Digite quantos quartos tem:")
        novoImovel.banheiro = prompt("Quantidade de banheiro:")
        novoImovel.garagem = prompt("Possui garagem? (Sim/Não)") 

        let confirmacao = confirm(
            "Deseja salvar esse imovel?\n" +
        "\nProprietario do imovel:" + novoImovel.nome +
        "\nQuantidade de quartos que o imovel tem:" + novoImovel.quartos +
        "\n Quantidade de banheiros:" + novoImovel.banheiro +
        "\n Tem garagem no imovel?" + novoImovel.garagem 
        )

        alert("Imóvel salvo com sucesso!")

    if(confirmacao){
        salvarImovel.push(novoImovel)
    }
        break

    case "2":
    for ( let i = 0; i < salvarImovel.length; i++) {
        alert(
         "Imóvel " + (i + 1) +
        "\nProprietarios: " + salvarImovel[i].nome +
        "\nQuartos: " + salvarImovel[i].quartos) +
        "\nBanheiros: " + salvarImovel[i].banheiro +
        "\nPossui garagem? " + salvarImovel[i].garagem
        break
    }

    case "3":
        alert("Voce escolheu a opção de sair.")
        alert("Saindo...")
        break

    default:
        alert("Opção invaldia.")
    }
}while(opcao !== "3")