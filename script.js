function abrirmenu (){
const menuaba = document.getElementById("menubarra");
     const menuf = document.getElementById("menufecha");
menuaba.classList.remove("menubarra");
      menuaba.classList.add("menubarraaberto"); 
    
    menuf.classList.remove("menufechai");
      menuf.classList.add("menufecha"); 
    
    
    }

    function fecharmenu(){
const menuaba = document.getElementById("menubarra");
      menuaba.classList.remove("menubarraaberto");
      menuaba.classList.add("menubarra");
      
           const menuf = document.getElementById("menufecha");
      menuf.classList.remove("menufecha");
      menuf.classList.add("menufechai"); 
    }

