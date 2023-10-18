function aumentarQtd(inputId) {
    let textarea = document.getElementById("lisPedArea");
    let selMaquina = document.getElementById("selMaquina").value;
    let selCapsula = document.getElementById("selCapsula").value;
    let qtdMaq = parseInt(document.getElementById("QtdMaq").value, 10);
    let qtdCap = parseInt(document.getElementById("QtdCap").value, 10);
    let txtValUnit = parseFloat(document.getElementById("TxtValUnit").value);
    let total = parseFloat(document.getElementById("TxtTotal").value, 10);
  
    if (inputId === "QtdMaq") {
        if(selMaquina === "-----"){
          alert("Nenhum produto selecionado!")
        }else{
          const novoValorMaq = qtdMaq;
        const novoPrecoMaq = txtValUnit;
        if(typeof total === "number")total += novoPrecoMaq
        textarea.value += `${selMaquina} R$ ${novoPrecoMaq},00\n`;
        qtdMaq = ""
        selMaquina = ""
        }
    } else if (inputId === "QtdCap") {
        if(selCapsula === "-----"){
          alert("Nenhum produto selecionado!")
        }else{
        const novoValorCap = qtdCap;
        const novoPrecoCap = txtValUnit;
        total.value = 0
        let tot = total += novoPrecoCap
        total = tot
        textarea.value += `${selCapsula} R$ ${novoPrecoCap},00\n`;
        
        qtdCap = ""
        selCapsula = ""
        }
    }
}

      function adicionarProduto() {
        const selMaquina = document.getElementById("selMaquina").value;
        const selCapsula = document.getElementById("selCapsula").value;
        const qtdMaq = document.getElementById("QtdMaq").value;
        const qtdCap = document.getElementById("QtdCap").value;
      }
      

      function atualizarCamposMaq() {
            var select = document.getElementById("selMaquina");
            var qtdMaq = document.getElementById("QtdMaq");
            var txtValUnit = document.getElementById("TxtValUnit");
            var selectCap = document.getElementById("selCapsula");

            selectCap.value = ""
            txtValUnit.value = ""
            if (select.value === "Mini ME") {
                if(qtdMaq.value < 1) qtdMaq.value = 1;
                txtValUnit.value = parseInt(500 * qtdMaq.value);
            } else if (select.value === "Genio S Plus") {
              if(qtdMaq.value < 1) qtdMaq.value = 1;
                txtValUnit.value = parseInt(800 * qtdMaq.value);
            } else if (select.value === "Inissia") {
              if(qtdMaq.value < 1) qtdMaq.value = 1;
                txtValUnit.value = parseInt(960 * qtdMaq.value);
            }else if (select.value === "LOV") {
              if(qtdMaq.value < 1) qtdMaq.value = 1;
                txtValUnit.value = parseInt(1500 * qtdMaq.value);
            }
        }

        function atualizarCamposCap() {
            var select = document.getElementById("selMaquina");
            var txtValUnit = document.getElementById("TxtValUnit");
            var selectCap = document.getElementById("selCapsula");
            var qtdCap = document.getElementById("QtdCap");

            select.value = ""
            txtValUnit.value = ""

            if (selectCap.value === "Dolce Gusto Espresso") {
              if(qtdCap.value < 1) qtdCap.value = 1;
                txtValUnit.value = parseInt(12 * qtdCap.value);
            }else if (selectCap.value === "Dolce Gusto Intenso") {
              if(qtdCap.value < 1) qtdCap.value = 1;
                txtValUnit.value = parseInt(23 * qtdCap.value);
            }else if (selectCap.value === "Força / Vibrante") {
              if(qtdCap.value < 1) qtdCap.value = 1;
                txtValUnit.value = parseInt(11 * qtdCap.value);
            }else if (selectCap.value === "Três Corações Intenso") {
              if(qtdCap.value < 1) qtdCap.value = 1;
                txtValUnit.value = parseInt(5 * qtdCap.value);
            }else if (selectCap.value === "Lor Forza") {
              if(qtdCap.value < 1) qtdCap.value = 1;
                txtValUnit.value = parseInt(50 * qtdCap.value);
            }
        }