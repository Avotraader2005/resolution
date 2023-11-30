 function avotr(){
 
 setTimeout((function(){document.body.style.backgroundColor="red"}),500);      
 setTimeout((function(){document.body.style.backgroundColor="gray"}),2500);    
 setTimeout((function(){document.body.style.backgroundColor="aqua"}),4500);    
 setTimeout((function(){document.body.style.backgroundColor="green"}),6500);   
 setTimeout((function(){document.body.style.backgroundColor="blue"}),8500);     
 setTimeout((function(){document.body.style.backgroundColor="yellow"}),10500);
 setTimeout((function(){document.body.style.backgroundColor="maroon"}),12500);
 
 }
 setInterval(avotr,13000);
 
function condition(para){
    if(para<6){
        para++
    }
    else{
        para=1
    }
    return para
}
function boucles(){
    document.getElementById("image1").style.zIndex =condition(document.getElementById("image1").style.zIndex)
    document.getElementById("image2").style.zIndex =condition(document.getElementById("image2").style.zIndex)
    document.getElementById("image3").style.zIndex =condition(document.getElementById("image3").style.zIndex)
    document.getElementById("image4").style.zIndex =condition(document.getElementById("image4").style.zIndex)
    document.getElementById("image5").style.zIndex =condition(document.getElementById("image5").style.zIndex)
    document.getElementById("image6").style.zIndex =condition(document.getElementById("image6").style.zIndex)
}

    setInterval(boucles, 2000);

