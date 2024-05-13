
document.querySelector("button").addEventListener("click",function(){
    var randomNumber1=Math.floor((Math.random()*6)+1);
    var image="images/dice"+randomNumber1+".png";
    document.querySelector(".img-1").setAttribute("src",image);
    
    
    var randomNumber2=Math.floor((Math.random()*6)+1);
    var image="images/dice"+randomNumber2+".png";
    document.querySelector(".img-2").setAttribute("src",image);
    
    
    if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="Player 2 Won"
    }else if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="Player 1 Won"
    }else{
        document.querySelector("h1").innerHTML="Draw"
    }
    

});