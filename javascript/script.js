function calcularLitros() {
 
 
    var inConsumo = document.getElementById("inconsumo");
    var outValor = document.getElementById("outValor")
  
  
    var precodolitro = 3.99;
    
    var consumoLitros = Number(inconsumo.value);
  
  
    var valor = (consumoLitros / precodolitro);
  
    outValor.textContent = "Voce abasteceu  : " + valor.toFixed(2) + " litros"
    
  }
  
  var Calcular = document.getElementById("Calcular");
  
  Calcular.addEventListener("click", calcularLitros);