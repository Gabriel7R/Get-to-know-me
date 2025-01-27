var nome= window.prompt ("Qual é o seu nome?")
document.write (`Ola, ${nome}! Seu nome tem ${nome.length} letras. <br/>`)
document.write(`Seu nome em letra maiscula é: ${nome.toLocaleLowerCase()}<br/>`)
document.write(`Seu nome em letra minuscula é: ${nome.toLocaleUpperCase()}`)