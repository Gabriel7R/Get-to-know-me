function calcularTriangulo() {
  const base = parseFloat(prompt("Coloque o valor da base do Triangulo:"))
  const altura = parseFloat(prompt("Coloque o valor da base do triangulo:"))
  return (base * altura) / 2;
}

function calcularRetangulo() {
  const base = parseFloat(prompt("Coloque o valor da base do Retangulo:"))
  const altura = parseFloat(prompt("Coloque o valor da base do retangulo:"))
  return base * altura;
}

function calcularQuadrado() {
  const lado = parseFloat(prompt("Coloque o valor dos lados do Quadrado:"))
  return lado * lado;
}

function calcularTrapezio() {
  const baseMaior = parseFloat(
    prompt("Coloque o valor da base Maior do Retangulo:")
  );
  const baseMenor = parseFloat(
    prompt("Coloque o valor da base menor do Retangulo:")
  );
  const altura = parseFloat(prompt("Coloque o valor da altura do Retangulo:"))
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularCirculo() {
  const raio = prompt("Coloque o valor do raio do Circulo:");
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Escolha uma das opçoes abaixo:" +
      "\n1. Deseja calcular a area do triangulo? " +
      "\n2. Deseja calcular a area do retangulo? " +
      "\n3. Deseja calcular a area do quadrado? " +
      "\n4. Deseja calcular a area do trapézio? " +
      "\n5. Deseja calcular a area do circulo? " +
      "\n6. Sair"
  );
}
function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado = "";

    switch (opcao) {
      case "1":
        resultado = calcularTriangulo()
        break;
      case "2":                         
        resultado = calcularRetangulo() 
        break; 
      case "3":                     
        resultado = calcularQuadrado()
        break;
      case "4":
        resultado = calcularTrapezio()
        break;
      case "5":
        resultado = calcularCirculo()
        break;
      case "6":
        alert("Voce escolheu a opção sair.");
        alert("Saindo...");
        break;
      default:
        alert("Opção invalida, tente novamente!");
        break;
    }
    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
