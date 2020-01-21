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
      }else if(resultado.textContent.indexOf(".")!=-1){ //El método indexOf() cadena.indexOf(valorBusqueda[, indiceDesde]) devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde; o devuelve -1 si no se encuentra dicho valor.
        resultado.textContent += "";
      }else{
        resultado.textContent += ".";
      }
    })

    teclaUno.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "1";
      }else {
        resultado.textContent += "1";
      }
    })
    teclaDos.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "2";
      }else {
        resultado.textContent += "2";
      }
    })
    teclaTres.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "3";
      }else {
        resultado.textContent += "3";
      }
    })
    teclaCuatro.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "4";
      }else {
        resultado.textContent += "4";
      }
    })
    teclaCinco.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "5";
      }else {
        resultado.textContent += "5";
      }
    })
    teclaSeis.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "6";
      }else {
        resultado.textContent += "6";
      }
    })
    teclaSiete.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "7";
      }else {
        resultado.textContent += "7";
      }
    })
    teclaOcho.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "8";
      }else {
        resultado.textContent += "8";
      }
    })
    teclaNueve.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "9";
      }else {
        resultado.textContent += "9";
      }
    })
    teclaCero.addEventListener('click', function(e){
      if (resultado.textContent === "0") {
        resultado.textContent = "0";
      }else {
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
      if (resultado.textContent != "" && operandoA != "" && operandoB == "" && operacion == "mas") {
        operandoB = resultado.textContent;
        resultado.textContent = Number(operandoA) + Number(operandoB)
        operandoA = resultado.textContent;
      }else if (resultado.textContent != "" && operandoB != "" && operacion == "mas") {
        operandoA = resultado.textContent;
        resultado.textContent = Number(operandoA) + Number(operandoB);
      }
      else if (resultado.textContent != "" && operandoA != "" && operandoB == "" && operacion == "menos") {
        operandoB = resultado.textContent;
        resultado.textContent = Number(operandoA) - Number(operandoB)
        operandoA = resultado.textContent;
      }else if (resultado.textContent != "" && operandoB != "" && operacion == "menos") {
        operandoA = resultado.textContent;
        resultado.textContent = Number(operandoA) - Number(operandoB);
      }
      else if (resultado.textContent != "" && operandoA != "" && operandoB == "" && operacion == "por") {
        operandoB = resultado.textContent;
        resultado.textContent = Number(operandoA) * Number(operandoB)
        operandoA = resultado.textContent;
      }else if (resultado.textContent != "" && operandoB != "" && operacion == "por") {
        operandoA = resultado.textContent;
        resultado.textContent = Number(operandoA) * Number(operandoB);
      }
      else if (resultado.textContent != "" && operandoA != "" && operandoB == "" && operacion == "dividir") {
        operandoB = resultado.textContent;
        resultado.textContent = Number(operandoA) / Number(operandoB)
        operandoA = resultado.textContent;
      }else if (resultado.textContent != "" && operandoB != "" && operacion == "dividir") {
        operandoA = resultado.textContent;
        resultado.textContent = Number(operandoA) / Number(operandoB);
      }

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

  finDisplay: function(){
    var x = this.resultado.textContent;
    for (var i = 0; i <= x.length; i++) {
      if (i==8) {
        break;
      }
      this.resultado.textContent =
    }
  }

};

Calculadora.apretarBotones();
Calculadora.vistaPantalla();
Calculadora.finDisplay();


    /*teclaIgual.addEventListener('click', function(){
      if (resultado.textContent == "0" && operandoA == "") {
        resultado.textContent = "0";
      }
      else if (resultado.textContent == "0" && operandoA != "" && operacion == "mas") {
        operandoB = resultado.textContent;
        resultado.textContent = Number(operandoA) + Number(operandoB);
      }
      else if (resultado.textContent != "0" && operandoA != "" && operacion == "mas") {
        operandoB = resultado.textContent;
        resultado.textContent = Number(operandoA) + Number(operandoB);
      }
    })*/


    /*teclaIgual.addEventListener('click', function(){
if (resultado.textContent == "0") {
resultado.textContent = "0";
}else if (resultado.textContent != "0" && operacion == "mas") {
operandoB = resultado.textContent;
resultado.textContent = Number(operandoA) + Number(operandoB);
}
})*/





/*
  operadores: function(){
    var teclaRaiz = document.getElementById("raiz");
    var teclaDivide = document.getElementById("dividido");
    var teclaPor = document.getElementById("por");
    var teclaMenos = document.getElementById("menos");
    var teclaIgual = document.getElementById("igual");
    var teclaMas = document.getElementById("mas");

    var operandoA = "", operandoB = "", operacion = "",
    resultadoTemp = this.resultado;

    teclaIgual = "";

    teclaMas.addEventListener('click', function(){
      operandoA = resultadoTemp;
      this.resultado = "";
      operacion = "+";
    })


  },
  */


/*
if (resultado.textContent == 0) {
  resultado.textContent = resultado.textContent + ".";
} else if (resultado.textContent != Math.ceil(resultado.textContent)) {
  resultado.textContent = resultado.textContent;
}else {
  resultado.textContent = resultado.textContent + ".";
}


  teclasNumericas: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","."],
  teclasOperaciones: ["+", "-", "*", "/"],
  teclasResultados: ["=", ""],
  teclaCambioSigno: [""],

  imagenPantalla: function(){
    this.teclasNumericas[0].value = document.getElementById('0');
    this.teclasNumericas[1].value = document.getElementById('1');
    this.teclasNumericas[2].value = document.getElementById('2');
    this.teclasNumericas[3].value = document.getElementById('3');
    this.teclasNumericas[4] = document.getElementById('4');
    this.teclasNumericas[5] = document.getElementById('5');
    this.teclasNumericas[6] = document.getElementById('6')
    this.teclasNumericas[7] = document.getElementById('7');
    this.teclasNumericas[8] = document.getElementById('8');
    this.teclasNumericas[9] = document.getElementById('9');
    this.teclasNumericas[10] = document.getElementById('punto');
    this.teclasOperaciones[0] = document.getElementById('mas');
    this.teclasOperaciones[1] = document.getElementById('menos');
    this.teclasOperaciones[2] = document.getElementById('por');
    this.teclasOperaciones[3] = document.getElementById('dividido');
    this.teclasResultados[1].value = document.getElementById('display');

    for (let i = 0; i < this.teclasNumericas.length; i++) {
      this.teclasNumericas[i].addEventListener('onclick', function(){
        this.teclasNumericas[i].value = this.teclasNumericas[i].value + this.teclasResultados[1]
      });
    };
  },



*/





/*
botones[i].addEventListener('mousedown', function(){
  botones[i].style.transform = "scale(.95, .95)";
});
botones[i].addEventListener('mouseup', function(){
  botones[i].setAttribute("style", "transform:scale(1, 1)");


  resultado: "8",
  teclaOn: "",
  teclaSigno: "",
  teclaRaiz: "",
  teclaDivide: "/",
  teclaSiete: "7",
  teclaOcho: "8",
  teclaNueve: "9",
  teclaPor: "*",
  teclaCuatro: "4",
  teclaCinco: "5",
  teclaSeis: "6",
  teclaMenos: "-",
  teclaUno: "1",
  teclaDos: "2",
  teclaTres: "3",
  teclaCero: "0",
  teclaPunto: ".",
  teclaIgual: "=",
  teclaMas: "+",


  function asignarValorTeclas(){
    document.getElementById('display') = resultado.string
  };

    document.getElementById('on') = teclaOn;
    document.getElementById('sign') = teclaSigno;
    document.getElementById('raiz') = teclaRaiz;
    document.getElementById('dividido') = teclaDivide;
    document.getElementById('7') = teclaSiete;
    document.getElementById('8') = teclaOcho;
    document.getElementById('9') = teclaNueve;
    document.getElementById('por') = teclaPor;
    document.getElementById('4') = teclaCuatro;
    document.getElementById('5') = teclaCinco;
    document.getElementById('6') = teclaSeis;
    document.getElementById('menos') = teclaMenos;
    document.getElementById('1') = teclaUno;
    document.getElementById('2') = teclaDos;
    document.getElementById('3') = teclaTres;
    document.getElementById('0') = teclaCero;
    document.getElementById('punto') = teclaPunto;
    document.getElementById('igual') = teclaIgual;
    document.getElementById('mas') = teclaMas;
  }
}

asignarValorTeclas();




   //propiedades
   resultado = document.getElementById('display');
   teclaOn = document.getElementById('on');
   teclaSigno = document.getElementById('sign');
   teclaRaiz = document.getElementById('raiz');
   teclaDivide = document.getElementById('dividido');
   teclaSiete = document.getElementById('7');
   teclaOcho = document.getElementById('8');
   teclaNueve = document.getElementById('9');
   teclaPor = document.getElementById('por');
   teclaCuatro = document.getElementById('4');
   teclaCinco = document.getElementById('5');
   teclaSeis = document.getElementById('6');
   teclaMenos = document.getElementById('menos');
   teclaUno = document.getElementById('1');
   teclaDos = document.getElementById('2');
   teclaTres = document.getElementById('3');
   teclaCero = document.getElementById('0');
   teclaPunto = document.getElementById('punto');
   teclaIgual = document.getElementById('igual');
   teclaMas = document.getElementById('mas');

   resultado: 0;

   //eventos
   teclaUno.onclick = function(){
     resultado = resultado + "1";
   }
   teclaDos.onclick = function(){
     resultado.textContent = resultado.textContent + "2";
   }
   teclaTres.onclick = function(e){
     resultado.TextContent = resultado.TextContent + "3";
   }
   teclaCuatro.onclick = function(e){
     resultado.TextContent = resultado.TextContent + "4";
   }
   teclaCinco.onclick = function(e){
     resultado.TextContent = resultado.TextContent + "5";
   }
   teclaSeis.onclick = function(e){
     resultado.TextContent = resultado.TextContent + "6";
   }
   teclaSiete.onclick = function(e){
     resultado.TextContent = resultado.TextContent + "7";
   }
   teclaOcho.onclick = function(e){
     resultado.TextContent = resultado.TextContent + "8";
   }
   teclaNueve.onclick = function(e){
     resultado.TextContent = resultado.TextContent + "9";
   }
   teclaCero.onclick = function(e){
     resultado.TextContent = resultado.TextContent + "0";
   }


      resultado: "0",
      teclaOn: "",
      teclaSigno: "",
      teclaRaiz: "",
      teclaDivide: "/",
      teclaSiete: "7",
      teclaOcho: "8",
      teclaNueve: "9",
      teclaPor: "*",
      teclaCuatro: "4",
      teclaCinco: "5",
      teclaSeis: "6",
      teclaMenos: "-",
      teclaUno: "1",
      teclaDos: "2",
      teclaTres: "3",
      teclaCero: "0",
      teclaPunto: ".",
      teclaIgual: "=",
      teclaMas: "+",



   document.getElementsByClassName('.teclado img').addEventListener("click", function(){


   achicarTecla: function(elemento){
     elemento.style.width = "20%";
     elemento.style.height = "60px";
   },
   agrandarTecla: function(){
     elemento.style.width = "22%";
     elemento.style.height = "62.91px";
   }



};
console.log(Calculadora);


  init: function(){
    var resultado = document.getElementById(display);
    var teclaOn = document.getElementById(on);
    var teclaSigno = document.getElementById(sign);
    var teclaRaiz = document.getElementById(raiz);
    var teclaDivide = document.getElementById(dividido);
    var teclaSiete = document.getElementById(7);
    var teclaOcho = document.getElementById(8);
    var teclaNueve = document.getElementById(9);
    var teclaPor = document.getElementById(por);
    var teclaCuatro = document.getElementById(4);
    var teclaCinco = document.getElementById(5);
    var teclaSeis = document.getElementById(6);
    var teclaMenos = document.getElementById(menos);
    var teclaUno = document.getElementById(1);
    var teclaDos = document.getElementById(2);
    var teclaTres = document.getElementById(3);
    var teclaCero = document.getElementById(0);
    var teclaPunto = document.getElementById(punto);
    var teclaIgual = document.getElementById(igual);
    var teclaMas = document.getElementById(mas);

    document.querySelectorAll('.teclado img').onmousedown = function(){
      achicarTecla();
    }
  }
*/
