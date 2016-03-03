$(document).ready(function(){ 
    
     setTimeout(function() {
    $("#alert_inicial").fadeOut(1500);
    },5000);
    
    reset_img();

    $('.btnSiguientevalid').click(function(){
    var select=$("select option:selected").val();
    if(select=='nada'){
     alert("selecione tamaño de porción");
     }else{
     $('.nav-tabs > .active').next('li').find('a').trigger('click');  
     $('html, body').animate({scrollTop: '0px'}, 50);
     }
    });
    
    $('.btnSiguiente').click(function(){
    $('.nav-tabs > .active').next('li').find('a').trigger('click');
    $('html, body').animate({scrollTop: '0px'}, 50);
       
    });

    $('.btnAtras').click(function(){
    $('.nav-tabs > .active').prev('li').find('a').trigger('click');
    $('html, body').animate({scrollTop: '0px'}, 50);
    });
    

    });//fin document ready


function reset_img(){
    $("#porciones").imagepicker({
    hide_select: true,
    show_label: true
    });
    $("#pollos_mariscos").imagepicker({
    hide_select: true,
    show_label: true,
         limit: 0
    });
    $("#barra_fria").imagepicker({
    hide_select: true,
    show_label: true,
         limit: 0
    });
    $("#aderezos").imagepicker({
    hide_select: true,
    show_label: true,
         limit: 0
    });
    $("#extras").imagepicker({
    hide_select: true,
    show_label: true,
         limit: 0
    });
$("#porciones").imagepicker({
    hide_select: true,
    show_label: true,
    selected: function(option){
        var values = this.val();
       if(values=='chico'){
         $("#pollos_mariscos").imagepicker({
         limit_reached: function(){alert('Limite de porcion excedido por plato chico!.pollo y mariscos')},
         hide_select: true,
         show_label: true,
         limit: 1
     }); 
           $("#barra_fria").imagepicker({
         limit_reached: function(){alert('Solo 3 ingredientes por plato chico!.barra fria')},
         hide_select: true,
         show_label: true,
         limit: 3
     });
        $("#aderezos").imagepicker({
        limit_reached: function(){alert('Solo 2 aderezos por plato chico')},
         hide_select: true,
         show_label: true,
         limit: 2
     });

        $("#extras").imagepicker({
         hide_select: true,
         show_label: true
     });
        
       }
         if(values=='mediano'){
               $("#pollos_mariscos").imagepicker({
         limit_reached: function(){alert('Limite de 2 porciones excedido por plato mediano!.pollos y mariscos')},
         hide_select: true,
         show_label: true,
         limit: 2
     });  
         $("#barra_fria").imagepicker({
         limit_reached: function(){alert('Solo 4 ingredientes por plato mediano!.barra fria')},
         hide_select: true,
         show_label: true,
         limit: 4
     });
        $("#aderezos").imagepicker({
        limit_reached: function(){alert('Solo 3 aderezos por plato mediano')},
         hide_select: true,
         show_label: true,
         limit: 3
     });

        $("#extras").imagepicker({
         hide_select: true,
         show_label: true
     });
         }
        if(values=='grande'){
             $("#pollos_mariscos").imagepicker({
         limit_reached: function(){alert('Limite de 3 porciones excedido por plato grande!.pollos y mariscos')},
         hide_select: true,
         show_label: true,
         limit: 3
     });  
         $("#barra_fria").imagepicker({
         limit_reached: function(){alert('Solo 5 ingredientes por plato grande!.barra fria')},
         hide_select: true,
         show_label: true,
         limit: 5
     });
        $("#aderezos").imagepicker({
        limit_reached: function(){alert('Solo 4 aderezos por plato grande')},
         hide_select: true,
         show_label: true,
         limit: 4
     });

        $("#extras").imagepicker({
         hide_select: true,
         show_label: true
     });
        }
    }



    
 });
  
    
    };
