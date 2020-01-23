var Calculadora = {

  //efecto al apretar boton
  apretarBotones: function(){
    var botones = document.getElementsByClassName("tecla");
    for (let i = 0; i < botones.length; i++) {
      botones[i].addEventListener('mousedown', function(){
        botones[i].style.transform = "scale(.95, .95)";
      });
      botones[i].addEventListener('mouseup', function(){
        botones[i].setAttribute("style", "transform:scale(1, 1)");
      });
    };
  },

  vistaPantalla: function(){
    var resultado = document.getElementById("display");
    var teclaOn = document.getElementById("on");
    var teclaSigno = document.getElementById("sign");
    var teclaSiete = document.getElementById("7");
    var teclaOcho = document.getElementById("8");
    var teclaNueve = document.getElementById("9");
    var teclaCuatro = document.getElementById("4");
    var teclaCinco = document.getElementById("5");
    var teclaSeis = document.getElementById("6");
    var teclaUno = document.getElementById("1");
    var teclaDos = document.getElementById("2");
    var teclaTres = document.getElementById("3");
    var teclaCero = document.getElementById("0");
    var teclaPunto = document.getElementById("punto");
    var teclaRaiz = document.getElementById("raiz");
    var teclaDivide = document.getElementById("dividido");
    var teclaPor = document.getElementById("por");
    var teclaMenos = document.getElementById("menos");
    var teclaIgual = document.getElementById("igual");
    var teclaMas = document.getElementById("mas");

    resultado.textContent = "0";

    teclaPunto.addEventListener('click', function(){
      if(resultado.textContent === "0"){
        resultado.textContent += ".";
      }else if(resultado.textContent.indexOf(".")!=-1){
        resultado.textContent += "";
      }else{
        resultado.textContent += "."
      }
    })

    teclaUno.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "1";
      }else if (resultado.textContent != "0" && resultado.textContent.length <= 7) {
        resultado.textContent += "1";
      }
    })
    teclaDos.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "2";
      }else if (resultado.textContent != "0" && resultado.textContent.length <= 7) {
        resultado.textContent += "2";
      }
    })
    teclaTres.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "3";
      }else if (resultado.textContent != "0" && resultado.textContent.length <= 7) {
        resultado.textContent += "3";
      }
    })
    teclaCuatro.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "4";
      }else if (resultado.textContent != "0" && resultado.textContent.length <= 7) {
        resultado.textContent += "4";
      }
    })
    teclaCinco.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "5";
      }else if (resultado.textContent != "0" && resultado.textContent.length <= 7) {
        resultado.textContent += "5";
      }
    })
    teclaSeis.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "6";
      }else if (resultado.textContent != "0" && resultado.textContent.length <= 7) {
        resultado.textContent += "6";
      }
    })
    teclaSiete.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "7";
      }else if (resultado.textContent != "0" && resultado.textContent.length <= 7) {
        resultado.textContent += "7";
      }
    })
    teclaOcho.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "8";
      }else if (resultado.textContent != "0" && resultado.textContent.length <= 7) {
        resultado.textContent += "8";
      }
    })
    teclaNueve.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "9";
      }else if (resultado.textContent != "0" && resultado.textContent.length <= 7) {
        resultado.textContent += "9";
      }
    })
    teclaCero.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "0";
      }else if (resultado.textContent != "0" && resultado.textContent.length <= 7) {
        resultado.textContent += "0";
      }
    })

    var operandoA = "";
    var operandoB = "";
    var operacion = "";

    teclaMas.addEventListener('click', function(){
      operacion = "mas";
      if (resultado.textContent == "0" && operandoA == "") {
        operandoA = resultado.textContent;
        resultado.textContent = "0";
      } else if (resultado.textContent != "0" && operandoA == "") {
        operandoA = resultado.textContent;
        resultado.textContent = "";
      } else if (resultado.textContent != "" && operandoA != "" && operandoB != "") {
        operandoA = resultado.textContent;
        operandoB = "";
        resultado.textContent = "";
      }

    })
    teclaMenos.addEventListener('click', function(){
      operacion = "menos";
      if (resultado.textContent == "0" && operandoA == "") {
        operandoA = resultado.textContent;
        resultado.textContent = "0";
      } else if (resultado.textContent != "0" && operandoA == "") {
        operandoA = resultado.textContent;
        resultado.textContent = "";
      } else if (resultado.textContent != "" && operandoA != "" && operandoB != "") {
        operandoA = resultado.textContent;
        operandoB = "";
        resultado.textContent = "";
      }

    })
    teclaPor.addEventListener('click', function(){
      operacion = "por";
      if (resultado.textContent == "0" && operandoA == "") {
        operandoA = resultado.textContent;
        resultado.textContent = "0";
      } else if (resultado.textContent != "0" && operandoA == "") {
        operandoA = resultado.textContent;
        resultado.textContent = "";
      } else if (resultado.textContent != "" && operandoA != "" && operandoB != "") {
        operandoA = resultado.textContent;
        operandoB = "";
        resultado.textContent = "";
      }
    })
    teclaDivide.addEventListener('click', function(){
      operacion = "dividir";
      if (resultado.textContent == "0" && operandoA == "") {
        operandoA = resultado.textContent;
        resultado.textContent = "0";
      } else if (resultado.textContent != "0" && operandoA == "") {
        operandoA = resultado.textContent;
        resultado.textContent = "";
      } else if (resultado.textContent != "" && operandoA != "" && operandoB != "") {
        operandoA = resultado.textContent;
        operandoB = "";
        resultado.textContent = "";
      }
    })

    teclaIgual.addEventListener('click', function(){
          var resultadoTemp = "0";
          if (resultado.textContent != "" && operandoA != "" && operandoB == "" && operacion == "mas") {
            operandoB = resultado.textContent;
            resultadoTemp = (parseFloat(operandoA) + parseFloat(operandoB));
            if (resultadoTemp < 100000000){
              resultado.textContent = resultadoTemp;
            }else{
              resultado.textContent = resultadoTemp.toPrecision(8);
            }
          }else if (resultado.textContent != "" && operandoB != "" && operacion == "mas") {
            operandoA = resultado.textContent;
            resultadoTemp = (parseFloat(operandoA) + parseFloat(operandoB));
            if (resultadoTemp < 100000000){
              resultado.textContent = resultadoTemp;
            }else{
              resultado.textContent = resultadoTemp.toPrecision(8);
            }
          }
          else if (resultado.textContent != "" && operandoA != "" && operandoB == "" && operacion == "menos") {
            operandoB = resultado.textContent;
            resultadoTemp = (parseFloat(operandoA) - parseFloat(operandoB));
            if (resultadoTemp < 100000000){
              resultado.textContent = resultadoTemp;
            }else{
              resultado.textContent = resultadoTemp.toPrecision(8);
            }
          }else if (resultado.textContent != "" && operandoB != "" && operacion == "menos") {
            operandoA = resultado.textContent;
            resultadoTemp = (parseFloat(operandoA) - parseFloat(operandoB));
            if (resultadoTemp < 100000000){
              resultado.textContent = resultadoTemp;
            }else{
              resultado.textContent = resultadoTemp.toPrecision(8);
            }
          }
          else if (resultado.textContent != "" && operandoA != "" && operandoB == "" && operacion == "por") {
            operandoB = resultado.textContent;
            resultadoTemp = (parseFloat(operandoA) * parseFloat(operandoB));
            if (resultadoTemp < 100000000){
              resultado.textContent = resultadoTemp;
            }else{
              resultado.textContent = resultadoTemp.toPrecision(8);
            }
          }else if (resultado.textContent != "" && operandoB != "" && operacion == "por") {
            operandoA = resultado.textContent;
            resultadoTemp = (parseFloat(operandoA) * parseFloat(operandoB));
            if (resultadoTemp < 100000000){
              resultado.textContent = resultadoTemp;
            }else{
              resultado.textContent = resultadoTemp.toPrecision(8);
            }
          }
          else if (resultado.textContent != "" && operandoA != "" && operandoB == "" && operacion == "dividir") {
            operandoB = resultado.textContent;
            resultadoTemp = (parseFloat(operandoA) / parseFloat(operandoB));
            if (resultadoTemp < 100000000){
              resultado.textContent = resultadoTemp;
            }else{
              resultado.textContent = resultadoTemp.toPrecision(8);
            }
          }else if (resultado.textContent != "" && operandoB != "" && operacion == "dividir") {
            operandoA = resultado.textContent;
            resultadoTemp = (parseFloat(operandoA) / parseFloat(operandoB));
            if (resultadoTemp < 100000000){
              resultado.textContent = resultadoTemp;
            }else{
              resultado.textContent = resultadoTemp.toPrecision(8);
            }
          };
      })



    teclaOn.addEventListener('click', function limpiar(){
      resultado.textContent = "0";
      operandoA = "";
      operandoB = "";
      operacion = "";
    })
    teclaSigno.addEventListener('click', function(){
      resultado.textContent = -resultado.textContent;
    })

  },

  init: function(){
    this.apretarBotones();
    this.vistaPantalla();
  }

};

Calculadora.init();
