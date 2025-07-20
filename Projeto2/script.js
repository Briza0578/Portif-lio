let OpcA = 0, OpcB = 0, OpcC = 0, OpcD = 0, OpcE = 0;

      function contarOpcao(select) {
        if (select.value == 'a') {
            OpcA++;
        } else if (select.value == 'b') {
            OpcB++;
        } else if(select.value == 'c'){
          OpcC++;
        } else if(select.value == 'd'){
          OpcD++
        }else if(select.value == 'e'){
          OpcE++;
        }

      document.getElementById("1").innerHTML = "Sua inclinação para áreas a seguir: ";
      document.getElementById("2").innerHTML = "Ciências Exatas ou Tecnologia é: " + OpcA;
      document.getElementById("3").innerHTML = "Artes ou Comunicação: " + OpcB;
      document.getElementById("4").innerHTML = "Ciências Humanas ou Saúde: " + OpcC;
      document.getElementById("5").innerHTML = "Biológicas ou Ambientais: " + OpcD;
      document.getElementById("6").innerHTML = "Gestão ou Negócios: " + OpcE;
      }

      function lerSelects(){
       // Pega todos os <select> da página e guarda em uma variavel
      const selects = document.querySelectorAll('select');
      // Percorre cada select usando forEach (parecido com loop)
      selects.forEach(contarOpcao);
      // Mostra o resultado no console depois de rodar "todo o loop"
      //gaerjknajkfhvjkf
      document.getElementById("most").value =
        "A: " + OpcA + " | B: " + OpcB + " | C: " + OpcC + " | D: " + OpcD + " | E: " + OpcE;
        OpcA = 0;
        OpcB = 0;
        OpcC = 0;
        OpcD = 0;
        OpcE = 0;}

