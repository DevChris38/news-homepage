    window.onload=function(){
    let bouton = document.getElementById('bouton-menu');
    let nav = document.getElementById('nav');
    let ouvrir = document.getElementById('icon-menu');
    let fermer = document.getElementById('icon-menu-croix');

      bouton.onclick = function(e){
        if(nav.style.display=="block"){
            nav.style.display="none";
            fermer.style.display="none";
            ouvrir.style.display="block";
        }else if(window.innerWidth < 1110){
            nav.style.display="block";
            ouvrir.style.display="none";
            fermer.style.display="block";
        }else{
            nav.style.display="flex";
        }
      };
    };
