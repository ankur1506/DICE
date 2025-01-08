function rollDice(){

    var a=Math.floor(Math.random()*6)+1
    if (a==1){
        document.querySelector("div").setAttribute("class","dice container ff")
    }

    else if (a==2){
         document.querySelector("div").setAttribute("class","dice container sf")
    }


    else if (a==3){
         document.querySelector("div").setAttribute("class","dice container tf")
    }


    else if (a==4){
         document.querySelector("div").setAttribute("class","dice container fourf")
    }


     else if (a==5){
        document.querySelector("div").setAttribute("class","dice container tf fivef")
    }


    else if (a==6){
        document.querySelector("div").setAttribute("class","dice container sixf fourf")
    }

}

