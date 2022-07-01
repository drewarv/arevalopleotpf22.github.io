

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });

function cambioFuente(type){
  let ids = ["#h", "#p", "#d", "#b", "#p3"];
  ids.forEach(id => {
       let el = document.querySelector(id);
       let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size");
       fontSize=parseFloat(fontSize);
       if(type === "mas"){
            el.style.fontSize = (fontSize + 2) + "px";
       }else{
            el.style.fontSize = (fontSize - 2) + "px";
       }
  })
}

