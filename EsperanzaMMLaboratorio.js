'use strict';

   function puntuar(){

    var punt = document.getElementById("valoracion").value;

       alert("Has valorado con " + punt + " puntos");
   }


   function cuentaBancaria(){
    let num1= document.getElementById("Pais").placeholder;
    let num2= document.getElementById("IBAN").value;
    let num3= document.getElementById("Entidad").value;
    let num4= document.getElementById("Sucursal").value;
    let num5= document.getElementById("DC").value;
    let num6= document.getElementById("Cuenta").value;

       alert(`Le informamos que su cuenta bancaria es: \n ${num1} ${num2} ${num3} ${num4} ${num5} ${num6}`);
   }

   function diaSemana(){

      const semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
      let dia
      let date = document.getElementById("fecha").value;
     
        if (date === "2019-01-01"){      
           dia = "Martes";
        } 
        else {
         let miDia = new Date(date); 
         dia = semana[miDia.getUTCDay()-1];
        }
      alert("La fecha seleccionada en el elemento fecha es un " + dia);
      }
