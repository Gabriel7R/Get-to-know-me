let fila= [ ]
 let opcao  = " "

 do{
    let pacientes =  ""
    for ( let i = 0; i < fila.length; i++){
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }
    opcao = prompt(

     "Pacientes:\n" + pacientes  + 
    "Ola! Escolha uma das opção que deseja:" + 
    "\n1. Entrar a fila de atendimento\n2. Consultar paciente\n33. Sair" )

    switch (opcao){
        case "1":
            const novoPaciente = prompt("Insira o nome do paciente:")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            if (pacienteConsultado){ 
             alert(pacienteConsultado + " Foi consultado pelo médico.")
        }else {
            alert("Não tem mais ninguem para ser atendido!")
        }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção invalida tente novamente.")
            
    }
 }while ( opcao !== "3")