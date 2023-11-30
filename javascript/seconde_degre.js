var x,x1,x2;

    function calcul(){
        var a=parseInt(document.getElementById("a").value);
        var b=parseInt(document.getElementById("b").value);
        var c=parseInt(document.getElementById("c").value);
        var d=parseInt(document.getElementById("d").value);

        c=c-d;
        var delta=parseFloat((b*b)-4*(a*c));
        var racine_delta=parseFloat(Math.sqrt(delta));
        if(a=="0"){
            document.getElementById("x1").value = "verifier les"
            document.getElementById("x2").value = "nombre entrer"
        }
        if (delta == 0){
            x=(-b)/(2*a);
            document.getElementById("x1").value = "solution unique : "
            document.getElementById("x2").value= " x =" + x;
        }
        else if (delta>0){
             x1=(-b-racine_delta)/(2*a);
             x2=(-b+racine_delta)/(2*a);

            document.getElementById("x1").value= " X1 = " + x1.toFixed(3);
            document.getElementById("x2").value= " X2 = " + x2.toFixed(3);
        }
        else {
            document.getElementById("x1").value = " Solution vide ";
            document.getElementById("x2").value = " car delta negatif";
        }
    }    
