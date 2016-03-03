
function calcularCalorias() {
    var calorias=0,TransFat=0, Protein=0, Sugar=0, Fiber=0, Carbo=0, Sod=0, Chol=0, SatFat=0, Fat=0, CalFat=0;

  $('select').each(function(){     
     var opciones = this.options;
     for (i=1;i<opciones.length;i++) {
              if (opciones[i].selected == true ) {
                    var cal = opciones[i].dataset.cal;
                    var tf = opciones[i].dataset.transfat;
                    var p = opciones[i].dataset.protein;
                    var s = opciones[i].dataset.sugar;
                    var f = opciones[i].dataset.fiber;
                    var c = opciones[i].dataset.carbo;
                    var sod = opciones[i].dataset.sod;
                    var chol = opciones[i].dataset.chol;
                    var satfat = opciones[i].dataset.satfat;
                    var fat = opciones[i].dataset.fat;
                    var calfat = opciones[i].dataset.calfat;
                    calorias += (parseInt(cal));
                    TransFat += (parseInt(tf));
                    Protein += (parseInt(p));
                    Sugar += (parseInt(s));
                    Fiber += (parseInt(f));
                    Carbo += (parseInt(c));
                    Sod += (parseInt(sod));
                    Chol += (parseInt(chol));
                    SatFat += (parseInt(satfat));
                    Fat += (parseInt(fat));
                    CalFat += (parseInt(calfat));    
                 }
              }  
   });
    $('#cal').html(calorias+"g");
    $('#transfat').html(TransFat+"g");
    $('#protein').html(Protein+"g");
    $('#sugar').html(Sugar+"g");
    $('#fiber').html(Fiber+"g");
    $('#carbo').html(Carbo+"g");
    $('#sod').html(Sod+"g");
     $('#chol').html(Chol+"g");
     $('#satfat').html(SatFat+"g");
     $('#fat').html(Fat+"g");
     $('#calfat').html(CalFat+"g");

}


  
  
