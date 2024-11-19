document.getElementById("TutorialByHand").addEventListener("change", minimize1);
document.getElementById("TutorialBySoftware").addEventListener("change", minimize2);
document.getElementById("TutorialForIPNS").addEventListener("change", minimize3);
document.getElementById("tabhome").addEventListener("click", returnhome);

function returnhome(){
    console.log(window.location.href);
    window.location.replace("./index.html");
}


function minimize1(){
    var checked2 = document.getElementById("TutorialByHand").checked;
    //console.log(checked2);
    if (checked2){
    //console.log("clicked! To");
    document.getElementById("TutorialByHandContainer").setAttribute("style", "display: none");
    }else{
    //console.log("clicked!");
   document.getElementById("TutorialByHandContainer").removeAttribute("style");
    }
}

function minimize2(){
    var checked2 = document.getElementById("TutorialBySoftware").checked;
    //console.log(checked2);
    if (checked2){
    //console.log("clicked! To");
    document.getElementById("TutorialBySoftwareContainer").setAttribute("style", "display: none");
    }else{
    //console.log("clicked!");
   document.getElementById("TutorialBySoftwareContainer").removeAttribute("style");
    }
}

function minimize3(){
    var checked2 = document.getElementById("TutorialForIPNS").checked;
    //console.log(checked2);
    if (checked2){
    //console.log("clicked! To");
    document.getElementById("TutorialForIPNSContainer").setAttribute("style", "display: none");
    }else{
    //console.log("clicked!");
   document.getElementById("TutorialForIPNSContainer").removeAttribute("style");
    }
}
