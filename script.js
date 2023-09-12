
document.querySelector(".go").addEventListener("click", function() {
var randomNum = Math. floor(Math. random() * 6)+1;
if(randomNum===1){
       var img1 =  document.querySelector(".image1");
        img1.setAttribute("src","./images/dice1.png");
}


if(randomNum===2){ 
       var img2 =  document.querySelector(".image1");
        img2.setAttribute("src","./images/dice2.png");
}
        

if(randomNum===3){
       var img3 =  document.querySelector(".image1");
        img3.setAttribute("src","./images/dice3.png");
}  


       if(randomNum===4){ 
       var img4 =  document.querySelector(".image1");
        img4.setAttribute("src","./images/dice4.png");
       }
        

       if(randomNum===5){
       var img5 =  document.querySelector(".image1");
        img5.setAttribute("src","./images/dice5.png");
       }
        

       if(randomNum===6){
       var img6 =  document.querySelector(".image1");
        img6.setAttribute("src","./images/dice6.png");
       }

       

    
        

        


        




})


document.querySelector(".ready").addEventListener("click", function() {
    var randomNumber = Math. floor(Math. random() * 6)+1;
    if(randomNumber===1){
        var img7 =  document.querySelector(".image2");
         img7.setAttribute("src","./images/dice1.png");
 }
 
 
 if(randomNumber===2){ 
        var img8 =  document.querySelector(".image2");
         img8.setAttribute("src","./images/dice2.png");
 }
         
 
 if(randomNumber===3){
        var img9 =  document.querySelector(".image2");
         img9.setAttribute("src","./images/dice3.png");
 }  
 
 
        if(randomNumber===4){ 
        var img10 =  document.querySelector(".image2");
         img10.setAttribute("src","./images/dice4.png");
        }
         
 
        if(randomNumber===5){
        var img11=  document.querySelector(".image2");
         img11.setAttribute("src","./images/dice5.png");
        }
         
 
        if(randomNumber===6){
        var img12 =  document.querySelector(".image2");
         img12.setAttribute("src","./images/dice6.png");
        }

    })

    

    
        
    
            if(randomNum>randomNumber){
            document.querySelector(".win").innerHTML ="Player 1 Wins";
        }
        
         if(randomNumber>randomNum){
        
            document.querySelector(".win").innerHTML ="Player 2 Wins";
        }
        else{
            document.querySelector(".win").innerHTML ="DRAW";

        
        }

    

    
 


